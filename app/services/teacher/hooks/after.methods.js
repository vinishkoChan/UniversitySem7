const getTeacherInfo = (teacher, languages) => {
  return {
    id: teacher.id,
    firstName: teacher.firstName,
    lastName: teacher.lastName,
    login: teacher.login,
    languages: languages.map(l => ({
      name: l.language,
    })),
  };
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
  hydrateFindResponse,
};
