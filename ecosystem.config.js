module.exports = {
  apps : [
    {
      name   : "mongo-ui",
      script : "./server.js",
      error_file: `./logs/error.log`,
      out_file: `./logs/out.log`,
      log_date_format: 'YYYY-MM-DD HH:mm:ss:SSS',
      min_uptime: 10e3,
      max_restarts: 3,
    }
  ]
}