const { name } = require(__dirname + '/package.json');
module.exports = {
  apps: [{
    name,
    script: 'server/server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {},
    env_dev: {
      NODE_ENV: 'dev'
    },
    env_qa: {
      NODE_ENV: 'qa'
    },
    env_preprod: {
      NODE_ENV: 'staging'
    },
    env_prod: {
      NODE_ENV: 'prod'
    }
  }]
};
