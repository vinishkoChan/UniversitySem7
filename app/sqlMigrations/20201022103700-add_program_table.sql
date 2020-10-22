CREATE TABLE IF NOT EXISTS `program` (
  `id` BIGINT NOT NULL auto_increment ,
  `teacher_id` BIGINT NOT NULL,
  `student_id` BIGINT NOT NULL,
  `created_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;

INSERT INTO __migration (name) VALUES ('20201022103700-add_program_table.js');