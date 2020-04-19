var Sign = require('mongoose').model('Sign');
exports.create = function (req, res, next) {
    var sign = new Sign(req.body);
    var comment2 = req.body.comment;
    var session = req.session;
    session.comment = comment2;
    sign.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.render('./thank', {
                email: session.email,
                comment: session.comment
            })
        }
    });      
};