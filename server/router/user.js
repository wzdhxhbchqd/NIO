const router = require("koa-router")();
const {
  userLogin,
  userRegister,
  userFind,
} = require("../controllers/index.js");

const jwt = require("../utils/jwt.js");

router.prefix("/user"); // 添加路由前缀

// 登录
router.post("/login", async (ctx) => {
  // 获取到前端传递的帐号密码
  const { username, password } = ctx.request.body;

  try {
    //数据库里校验
    const result = await userLogin(username, password);
    if (result.length) {
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username,
      };

    //   生成token
      let token = jwt.sign({
        id: result[0].id,
        username: result[0].username,
      });

      console.log(token);

      ctx.body = {
        code: "8000",
        msg: "登录成功",
        data: data,
        token: token,
      };
    } else {
      ctx.body = {
        code: "8004",
        msg: "用户名或密码错误",
        data: "error",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      msg: "登录失败,服务器错误",
      data: error,
    };
  }
});

// 注册
router.post("/register", async (ctx) => {
  const { username, password, nickname } = ctx.request.body;
  let msg = "";
  if (!username) {
    msg = "用户名不能为空";
  } else if (!password) {
    msg = "密码不能为空";
  } else if (!nickname) {
    msg = "昵称不能为空";
  }
  if (msg) {
    ctx.body = {
      code: "8006",
      msg: msg,
      data: "error",
    };
    return;
  }

  try {
    //查询用户是否存在，用户名不能重复
    const findRes = await userFind(username);
    if (findRes.length) {
      //用户名已存在
      ctx.body = {
        code: "8007",
        msg: "该用户名已存在",
        data: "error",
      };
      return;
    }

    // 往数据库里写入数据
    const registerRes = await userRegister(username, password, nickname);
    if (registerRes.affectedRows) {
      ctx.body = {
        code: "8000",
        msg: "注册成功",
        data: "success",
      };
    } else {
      ctx.body = {
        code: "8004",
        msg: "注册失败",
        data: "error",
      };
    }
  } catch(error) {
    ctx.body = {
      code: "8005",
      msg: "注册失败，服务器错误",
      data: error,
    };
  }
});

// 测试token
// 中间件
router.post("/test", jwt.verify(), (ctx) => {
  ctx.body = {
    code: "8000",
    msg: "token验证成功",
    data: "success",
  };
});

// 导出
module.exports = router;
