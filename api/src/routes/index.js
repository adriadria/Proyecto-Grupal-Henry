const { Router } = require('express');

const productRouter = require('./product.js');
const categoryRouter = require('./category.js');
const userRouter = require('./userRoutes');

const router = Router();

router.use('/products', productRouter);
router.use('/categories', categoryRouter);
router.use('/user', userRouter);
//router.use('/',);

module.exports =  router;