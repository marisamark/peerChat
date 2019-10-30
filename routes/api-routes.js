// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function(app) {

  app.get('/api/lobbies', function(req,res){
    db.Lobby.findAll({}).then(function (results) {
      res.json(results)
    })
  })

  app.get('/api/lobbies/:id', function(req, res) {
    db.Lobby.findAll({
      where: {
        id: req.params.id,
      }
    }).then(function (results) {
      res.json(results)
    })
  })

  app.post("/api/lobbies", function (req, res) {
    let lobby = req.body

    console.log(`deleting ${lobby.name}`)
    db.Lobby.create({
      id: lobby.id,
      lobby_name: lobby.name,
      user2Id: null
    })
    res.end();
  })

    app.delete("/api/lobbies/:id", function (req, res) {
      console.log(`DELETING ${req.params.id}`)
      db.Lobby.destroy({
        where: {
          id: req.params.id
        }
      })
      res.end();
    })

    app.put("/api/lobbies/:id", function (req, res) {
      db.Lobby.update(
        {user2Id: JSON.stringify(req.body.user2Id) },
        {where: {id: req.params.id}}
      )
      res.end();
    })
}
