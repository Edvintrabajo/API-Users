DROP DATABASE IF EXISTS dbusers;
CREATE DATABASE dbusers;

USE dbusers;

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  surname VARCHAR(45) DEFAULT NULL,
  age INT(11) DEFAULT NULL,
  email VARCHAR(45) DEFAULT NULL,
  img VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (id)
);

DESCRIBE users;

INSERT INTO users (name, surname, age, email, img) values 
('John', 'Doe', 25, 'John@gmail.com', 'https://robohash.org/1'),
('Jane', 'Doe', 23, 'Jane@gmail.com', 'https://robohash.org/2'),
('Bob', 'Doe', 27, 'Bob@gmail.com', 'https://robohash.org/3'),
('Alice', 'Doe', 21, 'Alice@gmail.com', 'https://robohash.org/4');

SELECT * FROM users;
