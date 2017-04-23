const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

// Initialize router
const router = new Router();

router.get('/api', async (ctx, next) => {
    
    console.log('The API has been requested by a client.');
     
    await (ctx.body = { message: "This is an API endpoint." });
    
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);