module.exports = (Ticket) => {
  Ticket.remoteMethod('analytics', {
    description: 'money earned / people visited per month between given dates',
    accepts: [{
      arg: 'type',
      type: 'string',
      http: {
        source: 'path'
      },
      description: 'analytics type: visited / earnings',
      required: true
    }, {
      arg: 'method',
      type: 'string',
      http: {
        source: 'query'
      },
      description: 'db / js',
      required: true
    }, {
      arg: 'data',
      type: 'DatePayload',
      http: {
        source: 'body'
      },
      required: true
    }],
    returns: {
      type: 'object',
      root: true
    },
    http: {
      path: '/analytics/:type',
      verb: 'post',
      status: 200,
      errorStatus: 400
    },
    documented: true
  });
};
