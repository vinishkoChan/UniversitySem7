const hydrateGetResponse = hook => {
  const program = hook.result;

  if (!program.id) {
    return Promise.resolve(hook);
  }

  hook.result = {
    id: program.id,
    teacherId: program.teacherId,
    studentId: program.studentId,
    tasks: program.tasks.map(t => ({
      id: t.id,
      topic: t.topic,
      description: t.description
    })),
  }

  return Promise.resolve(hook);
};

module.exports = {
  hydrateGetResponse,
};
