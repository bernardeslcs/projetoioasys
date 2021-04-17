const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "../../.env") });



module.exports = {
    dialect: 'postgres',
    host:  process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define:{
        timestamps: true,
        underscore: true  
    },
};