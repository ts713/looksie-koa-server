const Router = require('koa-router');
const router = new Router();
const parse = require('co-body');
 
const { getProducts, getShopData } = require('./queries.js');
 
const prepareAuth = (ctx) => {
    const accessToken = ctx.cookies.get("accessToken");
    const shopOrigin = ctx.cookies.get("shopOrigin");
    return {
        token: accessToken,
        shop: shopOrigin
    }
};
 
// Create the 'products' route
router.get('/products/', async (ctx) => {
 
    const auth = prepareAuth(ctx);
 
    await getProducts(auth).then(response => ctx.body = response.data.data.products);
});

// Create the 'shop' route
router.get('/shop/', async (ctx) => {
 
    const auth = prepareAuth(ctx);
 
    await getShopData(auth).then(response => ctx.body = response.data.data.shop);
});

module.exports = {
    router
}