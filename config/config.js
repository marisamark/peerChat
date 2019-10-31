exports.configure = function(env) {
  return configs[env];
}

let configs = {
  "development": {
    "username": 'root', //"rlxnqsja44klcajj",
    "password": `${process.env.DB_PASSWORD}`,
    "database": 'lobbies_db' ,//"g2ps5360opx8dun9",
    "host": "localhost",  //"d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable":"JAWSDB_URL"
  }
}
