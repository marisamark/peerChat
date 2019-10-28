
module.exports = function(sequelize, DataTypes) { // Creating a lobby module
  var Lobby = sequelize.define("Lobby", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },

    lobby_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    user2Id: {
      type: DataTypes.STRING,
    }
  });
  return Lobby;
};
