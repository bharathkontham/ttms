const loopback = require('loopback');
const mockData = require('./mockdata.json');

describe('Ticket management APIs', () => {

  let app = loopback();

  app = {
    models: {
      Ticket: {
        find: jest.fn(),
        count: jest.fn(),
        getDataSource: jest.fn(() => {
          return {
            connector: {
              db: {
                search: jest.fn()
              },
              settings: {
                index: 'bussr-ttms'
              }
            }
          }
        })
      }
    }
  }

  beforeAll(() => {
    require('../../server/boot/controllers/ticket')(app);
  });
  afterAll(() => {
    app = null;
  });

  describe('Summary profit of ticket sales per month', () => {
    beforeAll(() => {
      app.models.Ticket.find = jest.fn(() => mockData.mockFindResponse);
      app.models.Ticket.count = jest.fn(() => mockData.mockCountResponse);
      app.models.Ticket.getDataSource = jest.fn(() => {
        return {
          connector: {
            db: {
              search: jest.fn(() => mockData.mockDBAggregationResponseEarnings)
            },
            settings: {
              index: 'bussr-ttms'
            }
          }
        }
      });
    });

    it('should return total sales done per month using db method', async () => {
      const result = await app.models.Ticket.analytics(
        'earnings',
        'db', {
          fromDate: '2021-02-01T00:00:00.000Z',
          toDate: '2021-07-01T00:00:00.000Z'
        }
      );
      expect(result).not.toBeNull();
      expect(result).toEqual(mockData.mockEarnings);
    });

    it('should return total sales done per month using js method', async () => {
      const result = await app.models.Ticket.analytics(
        'earnings',
        'js', {
          fromDate: '2021-02-01T00:00:00.000Z',
          toDate: '2021-07-01T00:00:00.000Z'
        }
      );
      expect(result).not.toBeNull();
      expect(result).toEqual(mockData.mockEarnings);
    });
  });

  describe('People visited theatre per month', () => {
    beforeAll(() => {
      app.models.Ticket.find = jest.fn(() => mockData.mockFindResponse);
      app.models.Ticket.count = jest.fn(() => mockData.mockCountResponse);
      app.models.Ticket.getDataSource = jest.fn(() => {
        return {
          connector: {
            db: {
              search: jest.fn(() => mockData.mockDBAggregationResponseVisits)
            },
            settings: {
              index: 'bussr-ttms'
            }
          }
        }
      });
    });

    it('should return total people visited per month using db method', async () => {
      const result = await app.models.Ticket.analytics(
        'visited',
        'db', {
          fromDate: '2021-02-01T00:00:00.000Z',
          toDate: '2021-07-01T00:00:00.000Z'
        }
      );
      expect(result).not.toBeNull();
      expect(result).toEqual(mockData.mockVisits);
    });

    it('should return total people visited per month using js method', async () => {
      const result = await app.models.Ticket.analytics(
        'visited',
        'js', {
          fromDate: '2021-02-01T00:00:00.000Z',
          toDate: '2021-07-01T00:00:00.000Z'
        }
      );
      expect(result).not.toBeNull();
      expect(result).toEqual(mockData.mockVisits);
    });

    it('should throw error if method is invalid', () => {
      expect(app.models.Ticket.analytics(
        'visited',
        'js2', {
          fromDate: '2021-02-01T00:00:00.000Z',
          toDate: '2021-07-01T00:00:00.000Z'
        }
      )).rejects.toThrow();
    });
    it('should throw error if type is invalid', () => {
      expect(app.models.Ticket.analytics(
        'analytics-for-visited',
        'js', {
          fromDate: '2021-02-01T00:00:00.000Z',
          toDate: '2021-07-01T00:00:00.000Z'
        }
      )).toEqual(mockData.mockVisits);
    });
  });

});
