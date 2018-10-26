const config = {
  shared: {
    port: process.env.port || 3004,
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:3001'
  },
  local: {},
  development: {},
  production: {}
};
module.exports = { ...config.shared, ...config[process.env.NODE_ENV] };
