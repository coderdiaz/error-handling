require("dotenv").config();
const path = require("path");

module.exports = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASSWORD,
  synchronize: false,
  database: (process.env.NODE_ENV !== "test") ? process.env.TYPEORM_DATABASE : "test",
  entities: [path.join(__dirname, 'src/**/*.entity.ts')],
  migrations: [path.join(__dirname, 'src/migrations/*.ts')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};