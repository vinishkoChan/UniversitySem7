const hydrateResponse = (hook) => {
  hook.result.password = null;

  return Promise.resolve(hook);
}

module.exports = {
  hydrateResponse,
}