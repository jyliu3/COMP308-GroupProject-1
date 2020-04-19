exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    var comment = req.body.comment;
    session.comment = comment;
    //check if username is stored in session object
        res.render('feedback', {
            email: session.email,
            student: session._id 
        });
  
};