// 封装一个函数用来连接数据库
const mysql = require("mysql2/promise");
const config = require("../config/index.js");

// 创建连接池——线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
});

const allServices = {
  async query(sql, values) {
    try {
      // 通过线程池连接mysql
      const conn = await pool.getConnection();
      //对连接执行某些操作
      const [rows, fields] = await conn.query(sql, values);
      //释放连接
      pool.releaseConnection(conn);

      return Promise.resolve(rows);
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

//登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username = '${username}' and password = '${password}'`;
  return allServices.query(_sql);
};

//注册
const userRegister = (username, password, nickname) => {
  let _sql = `insert into users(username,password,nickname) values('${username}','${password}','${nickname}')`;
  return allServices.query(_sql);
};

//查询用户
const userFind = (username) => {
  let _sql = `select * from users where username='${username}'`;
  return allServices.query(_sql);
};



module.exports = {
  userLogin,
  userRegister,
  userFind,
};
