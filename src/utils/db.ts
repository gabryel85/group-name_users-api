import { Sequelize } from 'sequelize-typescript';
import {Color} from '../models/Color';
import { User } from '../models/User';


const URI = "postgres://users_db_thnt_user:r93bzmM6800Kjgryb0QVTq508xW0g9PF@dpg-cmtnc87109ks73abu160-a.frankfurt-postgres.render.com/users_db_thnt"
const InternalURI = "postgres://users_db_thnt_user:r93bzmM6800Kjgryb0QVTq508xW0g9PF@dpg-cmtnc87109ks73abu160-a/users_db_thnt"


export const sequelize = new Sequelize(URI, {
  models: [Color, User],
  dialectOptions: {
    ssl: true,
  }
});

// export const sequelize = new Sequelize('users_db_thnt', 'users_db_thnt_user', 'r93bzmM6800Kjgryb0QVTq508xW0g9PF', {
//   host: 'localhost',
//   // one of our supported dialects:
//   // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
//   dialect: 'postgres'
// });


export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}