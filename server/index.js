const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const responses = require('./responses');
const random = require('lodash.random');

const app = new Koa();
const router = new Router();

app.use(logger());

const PORT = 4000;

const returnRes = (ctx, resourceName) => {
  const dice = random(0, 6);
  if (dice < 1) {
    ctx.status = 503;
    ctx.body = {
      errors: [
        {
          message: 'Service Unavailable',
        },
      ],
    };
  } else {
    ctx.body = {
      data: responses[resourceName],
    };
  }
};

router.get('/api/inbox/loans', ctx => {
  returnRes(ctx, 'loans');
});

router.get('/api/inbox/till', ctx => {
  returnRes(ctx, 'till');
});
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${PORT}\n`);
app.listen(PORT);
