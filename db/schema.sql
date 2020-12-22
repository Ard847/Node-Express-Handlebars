DROP DATABASE IF EXISTS burger;
CREATE DATABASE burger;

USE burgers;

create table burgers(
	id integer not null unique auto_increment,
    burger_name varchar(50),
    devoured boolean
);
