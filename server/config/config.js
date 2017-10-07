module.exports = {
  development: {
    use_env_variable: process.env.DATABASE_DEV_URL
  },
  production: {
    use_env_variable: process.env.DATABASE_PROD_URL
  }
};
