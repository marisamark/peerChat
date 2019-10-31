// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/a", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/a");
    }
    res.sendFile(path.join(__dirname, "../public/clientA.html"));
  });

  app.get("/b", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/b");
    }
    res.sendFile(path.join(__dirname, "../public/clientB.html"));
  });

  app.get("/lobbies", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/lobbies");
    }
    res.sendFile(path.join(__dirname, "../public/lobbies.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
