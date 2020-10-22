CREATE TABLE IF NOT EXISTS `student` (
  `id` BIGINT NOT NULL auto_increment ,
  `user_id` BIGINT NOT NULL,
  `mark_for_delete` TINYINT(1) NOT NULL DEFAULT 0,
  `created_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;

INSERT INTO __migration (name) VALUES ('20201022102800-add_student_table.js');