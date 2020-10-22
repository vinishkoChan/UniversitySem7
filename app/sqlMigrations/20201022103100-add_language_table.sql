CREATE TABLE IF NOT EXISTS `language` (
  `id` BIGINT NOT NULL auto_increment ,
  `name` VARCHAR(50) NOT NULL,
  `created_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;

INSERT INTO __migration (name) VALUES ('20201022103100-add_language_table.js');