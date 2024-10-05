const indexModel = require('../model/index');

const b = {
    index: (req, res) => {
        indexModel.getAll((err, products) => {
            if (err) {
                return res.status(500).send('Error retrieving products');
            }
            res.render('index', { products });
        });
    },
};

module.exports = b;