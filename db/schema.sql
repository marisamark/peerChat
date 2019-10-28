DROP DATABASE IF EXISTS lobbies_db;
CREATE DATABASE lobbies_db;

USE lobbies_db;

CREATE TABLE lobbies (
    id VARCHAR (30) NOT NULL,
    lobby_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)