const teacher = require('..');

const getTeacherInfo = (teacher, languages) => {
  return {
    firstName: teacher.firstName,
    lastName: teacher.lastName,
    login: teacher.login,
    languages: languages.map(l => ({
      name: l.language,
    })),
  };
};

const hydrateGetResponse = hook => {
  const { teachers, languages } = hook.result;

  hook.result = getTeacherInfo(teachers[0], languages);

  return Promise.resolve(hook);
};

const hydrateFindResponse = hook => {
  const { teachers, languages } = hook.result;

  hook.result = teachers.map(t =>
    getTeacherInfo(
      t,
      languages.filter(l => l.id === t.id),
    ),
  );

  return Promise.resolve(hook);
};

module.exports = {
  hydrateGetResponse,
  hydrateFindResponse,
};
