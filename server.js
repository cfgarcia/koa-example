
const koa = require('koa');
// DOC https://www.npmjs.com/package/koa2
const winston = require('winston');
const router = require('koa-router')();
// DOC https://github.com/alexmingoia/koa-router

const app = new koa();

router.get('/hello', ctx => {
  ctx.body = 'Hello Koa';
});

app.use(router.routes());
app.listen(3030);
winston.info('app running in port 3030');
