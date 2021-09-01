const { Router } = require('express');

const getProducts = require('./getProducts');
const postProduct = require('./postProduct');
const getCategories = require('./getCategories');
const postCategory = require('./postCategory');

const router = Router();

router.use('/products', getProducts);
router.use('/product', postProduct);
router.use('/categories', getCategories);
router.use('/category', postCategory);

module.exports =  router;
