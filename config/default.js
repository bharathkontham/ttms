module.exports = {
  DBConfig: {
    nodes: [process.env.ELASTICSEARCH_URL],
    requestTimeout: 30000,
    pingTimeout: 3000,
    agent: {
      maxSockets: 1,
      keepAlive: false
    },
    auth: {
      username: 'admin',
      password: 'admin'
    },
    ssl: {
      rejectUnauthorized: false
    }
  },
  LogLevel: 'info'
};
