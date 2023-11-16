-- Tạo schema todo_list
--
CREATE SCHEMA `todo_manager` ;
-- tạo bảng users
CREATE TABLE `todo_manager`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` TINYINT NOT NULL,
  PRIMARY KEY (`id`));
 -- tạo bảng tasks
  CREATE TABLE `todo_manager`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `priority` VARCHAR(200) NOT NULL,
  `deadeline` DATETIME NOT NULL,
  `done` TINYINT NOT NULL,
  PRIMARY KEY (`id`));