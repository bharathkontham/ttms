const config = require('config');
const ElasticMappings = require('./elasticMapping.json');

const configuration = config.get('DBConfig');

module.exports = {
  db: {
    name: 'db',
    connector: 'memory'
  },
  ticketdatasource: {
    name: 'ticketdatasource',
    connector: 'esv6',
    index: 'bussr-ttms',
    indexSettings: {
      number_of_shards: 1,
      number_of_replicas: 1
    },
    mappingType: '_doc',
    mappingProperties: ElasticMappings.ticketMapping,
    mappings: [],
    defaultSize: 1000,
    version: 7,
    configuration
  }
};
