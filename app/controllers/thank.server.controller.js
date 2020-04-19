exports.render = function (req, res) {
    var session = req.session;
    if (session.email && session.comment) {
        res.render('thank', {
            email: session.email,
            comment: session.comment
        });
        console.log("GET request - User name3 = " + session.email);
        console.log("GET request - User name3 = " + session.comment);
    }
    else { 
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>Please login first.</h1>');
        res.end('<a href=' + '/login' + '>Login</a>');
    }
    
    
};