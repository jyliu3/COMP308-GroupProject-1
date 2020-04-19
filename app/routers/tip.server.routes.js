var tips = require("../controllers/tip.server.controller");
module.exports = function (app) {
  app.route("/sent").post(tips.create);
};
