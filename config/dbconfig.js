require("dotenv").config();
const { Pool } = require("pg");


const isProduction = process.env.NODE_ENV === "production";
const database = process.env.NODE_ENV === "dev" ? process.env.PGDATABASE_TEST : process.env.PGDATABASE;

// const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;
const connectionString = `postgres://server_tut:Gd2HkVpDqaxBCcR06NmHteSQ6dQMk6E0@dpg-cg6tv0d269v5l67fp5bg-a.oregon-postgres.render.com/campusdb`;

const pool = new Pool({
  connectionString: isProduction? process.env.DATABASE_URL : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false }: false,
  ssl: true
});

module.exports = {
  pool
};
