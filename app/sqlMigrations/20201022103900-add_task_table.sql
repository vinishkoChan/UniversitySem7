CREATE TABLE IF NOT EXISTS `task` (
  `id` BIGINT NOT NULL auto_increment ,
  `program_id` BIGINT NOT NULL,
  `created_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`program`) REFERENCES `program` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;

INSERT INTO __migration (name) VALUES ('20201022103900-add_task_table.js');