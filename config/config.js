module.exports = {
    development: {
        username: "mysql.reusesport.se",
        username: "reusesport_se",
        password: "79LyXZkZ2CpchugjhzMxGhda",
        database: "reusesport_se",

    },
    production: {
        database: process.env.REACT_APP_REUSESPORT_DB_HOST,
        username: process.env.REACT_APP_REUSESPORT_DB_USER,
        password: process.env.REACT_APP_REUSESPORT_DB_PASSWORD,
        database: process.env.REACT_APP_REUSESPORT_DB_NAME,
    }
};