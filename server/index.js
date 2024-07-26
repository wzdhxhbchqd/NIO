const Koa = require("koa");
const { bodyParser } = require("@koa/bodyparser");
const app = new Koa();
// 解决跨域问题
const cors = require("@koa/cors");

const userRouter = require("./router/user.js");
// const noteRouter = require("./router/note.js");

app.use(cors()); // 告诉浏览器不要破坏我的响应
app.use(bodyParser()); // 解析请求体

// 添加userRouter 中定义的路由和请求处理方法
app.use(userRouter.routes(), userRouter.allowedMethods());
// app.use(noteRouter.routes(), noteRouter.allowedMethods());

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
