
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;


USE burgers_db;

CREATE TABLE burgers(
  id INT auto_increment,
  burger_name VARCHAR (30),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

INSERT INTO burgers (id, burger_name, devoured)
VALUES 
(1, "Hamburger", TRUE),
(2, "Cheeseburger", TRUE),
(3, "Veggie burger", FALSE);