const Category = require('../models/Category');

async function getCategories(_req, res, next) {
    try {
        const categories = await Category.findAll();
        return await res.send(categories);
    } catch (error) {
        next(error);
    }
}

async function getCategory(req, res, next) {
    const { id } = req.params;
    try {
        const category = await Category.findOne({ where: { id } });
        if (category) {
            return res.json(category);
        }
        return await res.send('the category does not exist');
    } catch (error) {
        next(error);
    }
}

async function createCategory(req, res, next) {
    const { name } = req.body;
    try {
        const category = await Category.findOne({ where: { name } });
        if (category) {
            return res.send('the category already exists');
        }
        await Category.create({
            name
        });
        return res.send('category create');
    } catch (error) {
        next(error);
    }
}

async function deleteCategory(req, res, next) {
    const { id } = req.params;
    try {
        const category = await Category.destroy({ where: { id } });
        if (category) {
            return res.send('category delete');
        }
    } catch (error) {
        next(error);
    }
}

async function updateCategory(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const category = await Category.findOne({ where: { id } });
        if (category) {
            await category.update({
                name,
                image,
            });
        } else {
            return res.send('category not found');
        }
        return res.send('category update');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
};
