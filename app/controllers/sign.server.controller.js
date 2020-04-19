var Sign = require("mongoose").model("Sign");

exports.render = function (req, res) {
  //make a reference to the session object
  var session = req.session;
  // var comment = req.body.comment;
  // session.comment = comment;
  //check if username is stored in session object
  res.render("entersign", {
    // email: session.email,
    // student: session._id,
  });
};

exports.create = function (req, res, next) {
  var sign = new Sign(req.body);
  // var comment2 = req.body.comment;
  var session = req.session;
  session.pulseRate = req.body.pulseRate;
  session.bloodPressure = req.body.bloodPressure;
  session.weight = req.body.weight;
  session.temperature = req.body.temperature;
  session.respiratory = req.body.respiratory;
  sign.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.render("./thank", {
        //   email: session.email,
        pulseRate: session.pulseRate,
        bloodPressure: session.bloodPressure,
        weight: session.weight,
        temperature: session.temperature,
        respiratory: session.respiratory,
      });
    }
  });
};

exports.get;
