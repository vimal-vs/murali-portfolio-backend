require('dotenv').config();
const { parse } = require('pg-connection-string');

const supabaseConfig = parse(process.env.SUPABASE_CONNECTION_URL);

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres'
    },
    production: {
        username: supabaseConfig.user,
        password: supabaseConfig.password,
        database: supabaseConfig.database,
        host: supabaseConfig.host,
        port: supabaseConfig.port,
        dialect: 'postgres'
    }
};