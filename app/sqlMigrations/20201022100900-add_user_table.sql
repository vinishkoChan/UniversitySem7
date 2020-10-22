CREATE TABLE IF NOT EXISTS `user` (
  `id` BIGINT NOT NULL auto_increment ,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `login` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `role` VARCHAR(50) NOT NULL,
  `mark_for_delete` TINYINT(1) NOT NULL DEFAULT 0,
  `created_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;

INSERT INTO __migration (name) VALUES ('20201022100900-add_user_table.js');