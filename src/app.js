import Koa from "koa";
import config from "../config.js";
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(config.port);
console.log(`Server now listening on: http://localhost:${config.port}`);
