CREATE TABLE IF NOT EXISTS `user_language` (
  `id` BIGINT NOT NULL auto_increment ,
  `user_id` BIGINT NOT NULL,
  `language_id` BIGINT NOT NULL,
  `created_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  FOREIGN KEY (`language_id`) REFERENCES `language` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;

INSERT INTO __migration (name) VALUES ('20201022103300-add_user_language_table.js');