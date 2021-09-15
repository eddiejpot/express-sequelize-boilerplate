import { Sequelize } from 'sequelize';
import url from 'url';

// import config
import allConfig from '../config/config.js';

//===============================
// import models here
//===============================
import exampleModelOne from './exampleOne.mjs';
import exampleModelTwo from './exampleTwo.mjs';

const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};
let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//===============================
// Initialize models
//===============================
db.exampleOne = exampleModelOne(sequelize, Sequelize.DataTypes);
db.exampleTwo = exampleModelTwo(sequelize, Sequelize.DataTypes);

//===============================
// Define all relationships here
//===============================
// E.g. 1-M associations between orders table and associated tables
db.exampleModelOne.hasMany(db.exampleModelTwo);
db.exampleModelTwo.belongsTo(db.exampleModelOne);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
