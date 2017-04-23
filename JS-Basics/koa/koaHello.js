const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    console.log('Hello, koa2');
    ctx.body = 'Hello, Koa2'
});

app.listen(3000);