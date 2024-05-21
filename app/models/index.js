const dbConfig = require("../config/db.config.js");

const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {};

db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, DataTypes);
db.messages = require("./message.model.js")(sequelize, DataTypes);

db.users.hasMany(db.messages, { as: "messages" });
db.messages.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});

module.exports = db;