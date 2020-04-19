var Tip = require("mongoose").model("tip");

exports.render = function (req, res) {
  //make a reference to the session object
  var session = req.session;
  // var comment = req.body.comment;
  // session.comment = comment;
  //check if username is stored in session object
  res.render("sendtips", {
    // email: session.email,
    // student: session._id,
  });
};

exports.create = function (req, res, next) {
  var tip = new Tip(req.body);
  // var comment2 = req.body.comment;
  var session = req.session;
  session.title = req.body.title;
  session.content = req.body.content;

  tip.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.render("./sent", {
        //   email: session.email,
        title: session.title,
        content: session.content,
      });
    }
  });
};

exports.get;
