module.exports = {
  HOST: "localhost",
  USER: "root1",
  PASSWORD: "pass",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};