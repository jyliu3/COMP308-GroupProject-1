var comments = require('../controllers/sign.server.controller');
module.exports = function(app) {
    app.route('/signs').post(comments.create);
};