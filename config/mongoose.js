const config = require('./config'),
mongoose = require('mongoose');
module.exports = function() {
    const db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    require('../app/models/sign.server.model');
    return db;
}