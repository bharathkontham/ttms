module.exports = (app) => {
  const {
    Ticket
  } = app.models;
  const moment = require('moment');
  const R = require('ramda');

  // how much money was earned by theater between 2 dates with division by months

  // from DB
  const moneyEarnedPerMonthDB = async (data) => {
    const {
      body
    } = await Ticket.getDataSource().connector.db.search({
      index: Ticket.getDataSource().connector.settings.index,
      body: {
        query: {
          bool: {
            filter: {
              range: {
                createdAt: {
                  gte: data.fromDate,
                  lte: data.toDate
                }
              }
            }
          }
        },
        aggs: {
          sales_per_month: {
            date_histogram: {
              field: 'createdAt',
              calendar_interval: 'month',
              format: 'MMMM yyyy'
            },
            aggs: {
              summaryProfit: {
                sum: {
                  field: 'price'
                }
              }
            }
          }
        },
        size: 0
      }
    });
    const result = body.aggregations.sales_per_month.buckets.map(m => {
      return {
        month: m.key_as_string,
        summaryProfit: m.summaryProfit.value
      }
    });
    return result;
  };

  const moneyEarnedPerMonthJS = async (data) => {
    const filter = {
      where: {
        and: [{
          createdAt: {
            gte: data.fromDate
          }
        }, {
          createdAt: {
            lte: data.toDate
          }
        }]
      },
      order: 'createdAt ASC'
    };
    const count = await Ticket.count(filter.where);
    filter.limit = count;
    const docs = await Ticket.find(filter);
    const groupByDate = R.groupBy((d) => {
      return moment(d.createdAt).format('MMMM yyyy');
    }, docs);
    const result = (Object.keys(groupByDate)).map(v => {
      return {
        month: v,
        summaryProfit: groupByDate[v].reduce((a, c) => {
          return a + c.price;
        }, 0)
      };
    });
    return result;
  };

  Ticket.earnings = async (method, data) => {
    if (method === 'db') {
      return await moneyEarnedPerMonthDB(data);
    }
    return await moneyEarnedPerMonthJS(data);
  };

  // how many people visited theater between 2 dates with division by months

  // DB
  const peopleVisitedPerMonthDB = async (data) => {
    const {
      body
    } = await Ticket.getDataSource().connector.db.search({
      index: Ticket.getDataSource().connector.settings.index,
      body: {
        query: {
          bool: {
            filter: {
              range: {
                createdAt: {
                  gte: data.fromDate,
                  lte: data.toDate
                }
              }
            }
          }
        },
        aggs: {
          people_visited: {
            date_histogram: {
              field: 'createdAt',
              calendar_interval: 'month',
              format: 'MMMM yyyy'
            }
          }
        },
        size: 0
      }
    });
    const result = body.aggregations.people_visited.buckets.map(m => {
      return {
        month: m.key_as_string,
        summaryVisits: m.doc_count
      }
    });
    return result;

  };

  // JS
  const peopleVisitedPerMonthJS = async (data) => {
    const filter = {
      where: {
        and: [{
          createdAt: {
            gte: data.fromDate
          }
        }, {
          createdAt: {
            lte: data.toDate
          }
        }]
      },
      order: 'createdAt ASC'
    };
    const count = await Ticket.count(filter.where);
    filter.limit = count;
    const docs = await Ticket.find(filter);
    const groupByDate = R.groupBy((d) => {
      return moment(d.createdAt).format('MMMM yyyy');
    }, docs);
    const result = (Object.keys(groupByDate)).map(v => {
      return {
        month: v,
        summaryVisits: groupByDate[v].length
      };
    });
    return result;
  };

  Ticket.visited = async (method, data) => {
    if (method === 'db') {
      return await peopleVisitedPerMonthDB(data);
    }
    return await peopleVisitedPerMonthJS(data);
  };

  Ticket.analytics = async (type, method, data) => {
    try {
      if (method !== 'db' && method !== 'js') {
        throw new Error('Invalid method!');
      }
      if (type !== 'visited' && type !== 'earnings') {
        throw new Error('Invalid analytics type!');
      }
      return await Ticket[type](method, data);
    } catch (error) {
      error.statusCode = error.statusCode || 400;
      throw error;
    }
  };
};
