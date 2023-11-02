module.exports = {
    port: process.env.PORT || 5000,
    environment: process.env.NODE_ENV || 'development',
    dbUrl: process.env.DB || 'mongodb://127.0.0.1:27017/Everestwalk',
    jwtExpire: process.env.JWT_EXPIRE || '2d',
    appDomain: process.env.APP_DOMAIN || 'http://127.0.0.0:5000/',
    appSecret: process.env.APP_SECRET || '12345678910111314151617181920',
  };