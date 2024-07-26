const jwt = require("jsonwebtoken");

function sign(option) {
  return jwt.sign(option, "666", {
    expiresIn: 60 * 60 * 24, //一天后过期
  });
}

function verify(token) {
  return async (ctx, next) => {
    let jwtToken = ctx.req.headers.authorization;
    // console.log(jwtToken);
    if (jwtToken) {
      // 判断是否合法
      try {
        const decoded = jwt.verify(jwtToken, "666");
        // console.log(decoded);
        // console.log(ctx.state.user);
        if (decoded.id) {
          next();
        }
      } catch (e) {
        ctx.body = {
          status: 401,
          msg: "token失效",
          data: e,
        };
      }
    } else {
      ctx.body = {
        status: 401,
        msg: "请提供token",
      };
    }
  };
}

module.exports = { sign, verify };
