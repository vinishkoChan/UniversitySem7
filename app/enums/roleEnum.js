const Enum = require('enum');

const roleEnum = new Enum([
  'TEACHER',
  'STUDENT',
], { ignoreCase: false });

module.exports = roleEnum;