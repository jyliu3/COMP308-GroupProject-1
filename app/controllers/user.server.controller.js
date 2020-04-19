var User = require('mongoose').model('User');
var Comment = require('mongoose').model('Sign');
exports.create = function (req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.redirect('/login')
        }
    });      
};

exports.login = function (req, res, next) {
    var value = " ";
    var username = req.body.username;
    var password = req.body.password;
    var session = req.session;
    session.username = username;
    if(username) {
        User.findOne({
            username: username
        }, (err, us) => {
            if (err) {
                return next(err);
            } else if(us === null) {
                res.render('index', {
                    validation: "Invalid User Name or Password!"
                });
            } else {
                req.username = us;
                session._id = us._id;
                var jsonUser = JSON.parse(JSON.stringify(us));
                if(!password) {
                    res.render('index', {
                        validation: "Invalid User Name or Password!"
                    });
                } else
                if(password === jsonUser.password.toString()) {
                    console.log("debug: " + jsonUser.role.toString());
                    if(jsonUser.role === "nurse")
                    {
                        res.render('nurse', {
                            user: jsonUser
                        });
                    } else
                    if(jsonUser.role === "patient")
                    {
                        res.render('patient', {
                            user: jsonUser
                        });
                    }
                    
                } else {
                    res.render('index', {
                        validation: "User Name or Password!"
                    });
                }
            }
        }
        )
        // res.redirect('/feedback');
    } else {
        res.render('index', {
            vadilation: value
        });
    }
    // res.redirect('/feedback');
}

exports.commentsByStudent = function (req, res, next) {
    var value = " ";
    var email = req.body.email;
    console.log(req.body.email);
    //find the student then its comments using Promise mechanism of Mongoose
    User.
        findOne({ email: email }, (err, student) => {
            if (err) {
                 return getErrorMessage(err); 
                } else if (student === null) {
                    res.render('search', {
                        validation: "Cannot find the email, please try again!"
                    })
                } else {
                    req.id = student._id;
                    console.log('debug: ' + req.id);
                }
        }).then(function () {
            //find the posts from this author
            Comment.
                find({
                    student: req.id
                }, (err, comments) => {
                    if (err) { return getErrorMessage(err); }
                    else if (comments === null)
                    {
                        res.render('comments', {
                            email: email,
                            comments: null
                        });
                    } else {
                        res.render('comments', {
                            email: email,
                            comments: comments
                        });
                    }
                    // res.json(comments);
                    
                });
        });
};




