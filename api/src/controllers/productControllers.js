const Product = require('../models/Product');
const Category = require('../models/Category');

async function getProducts(req, res, next) {
    const {name} = req.query;
    try {
        const products = await Product.find();
        if(!name){
            return res.json(products);
        }else{
            const productsByName = products.filter( product => product.name.toLowerCase().includes(name.toLowerCase()));
            return res.json(productsByName);
        }
    } catch (error) {
        next(error);
    }
}

async function getProductById(req, res, next) {
  const { id } = req.params;
  try {
    if (id) {
      const detail = await Product.findById(id);
      return res.json(detail);
    }
  } catch (error) {
    next(error);
  }
}

async function createProducts(req, res, next) {
    try {
        if (!req.body.length) {
            return res.send('Add product');
        } else {
            const products = req.body;
            console.log(products)
            products.forEach(
                async ({
                    image_url,
                    name,
                    description,
                    price,
                    categories }) => {
                    const [product] = await Product.findOrCreate({
                        where: {
                            name,
                        },
                        defaults: { image_url, description, price },
                    });
                    categories.forEach(async ({ name }) => {
                        const [category] = await Category.findOrCreate({
                            where: { name },
                        });
                        product.addCategory(category);
                    });
                }
            );
            if (products.length > 1) {
                const productsNames = products.map((elem) => elem.name);
                return res.json(`Los productos ${productsNames} han sido creados exitosamente.`);
            }
            if (products.length === 1) {
                const productName = products.map((elem) => elem.name);
                return res.json(`El producto ${productName} ha sido creado exitosamente.`);
            }
        }
    } catch (error) {
        next(error);
        return res.send('Product is not create ERROR');
    }
}

async function updateProductById(req, res, next) {
    try {
        let { id } = req.params;
        id = parseInt(id)
        const { image_url, name, description, price, categories } = req.body;

        await Category.destroy({
            where: {
                productId: id
            }
        });

        const product = await Product.findByPk(parseInt(id));

        await product.update({ image_url, name, description, price });

        categories.forEach(async ({ name }) => {
            const [category] = await Category.findOrCreate({
                where: {name}
            });
            await product.addCategory(category);
        });

        return res.send(`Producto ${name} actualizado ${id}`);
    } catch (error) {
        next(error);
        return res.send(`Product not update`);
        
    }
}

async function deleteProduct(req, res, next) {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        await product.destroy();
        console.log(`Deleted ${product.name} ID:${id}`)
        return res.send(`Deleted ${product.name} ID:${id}`)
    } catch (error) {
        next(error)
        return res.send('Product not found');
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProducts,
    updateProductById,
    deleteProduct
};
