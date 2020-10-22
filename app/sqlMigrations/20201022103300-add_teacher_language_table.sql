CREATE TABLE IF NOT EXISTS `teacher_language` (
  `id` BIGINT NOT NULL auto_increment ,
  `teacher_id` BIGINT NOT NULL,
  `language_id` BIGINT NOT NULL,
  `created_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`),
  FOREIGN KEY (`language_id`) REFERENCES `language` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;

INSERT INTO __migration (name) VALUES ('20201022103300-add_teacher_language_table.js');