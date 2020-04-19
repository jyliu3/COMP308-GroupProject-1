module.exports = function (app) {
  var index = require("../controllers/index.server.controller");
  var feedback = require("../controllers/feedback.server.controller");
  var thank = require("../controllers/thank.server.controller");
  var logout = require("../controllers/logout.server.controller");
  var users = require("../controllers/user.server.controller");
  var sign = require("../controllers/sign.server.controller");
  app.get("/", index.render);
  app.get("/login", index.render);
  //app.get('/feedback', feedback.render);
  app.get("/entersign", sign.render);
  app.get("/getsigns", user.signsByNurse);

  // app.post('/feedback', feedback.render);
  app.get("/thank", thank.render);
  app.get("/logout", logout.render);
  app.get("/signup", index.renderAddStudent);
  app.get("/search", index.renderSearch);
  app.post("/login", users.login);
  app.post("/", users.login);
  // app.post('/', function (req, res) {
  //     //console.log("POST request - User name = " + req.body.username);
  //     index.render(req, res);
  // });
};
