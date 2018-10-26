module.exports = async function(req, res, next) {
  req.profile = null;

  if (
    req.hasOwnProperty('headers') &&
    req.headers.hasOwnProperty('authorization') &&
    req.headers['authorization'].split(' ')[0] === 'JWT'
  ) {
    const token = req.headers['authorization'].split(' ')[1] || null;
    if (!token) {
      next();
      return;
    }
    try {
      // const profile = await authService.getTokenUser({ token, req });
      // HACK: mocking user
      // should substitute in auth service and get user
      const profile = { id: 1, role: 'USER' };
      if (profile.id) {
        req.profile = profile;
        next();
        return;
      }
    } catch (err) {
      // console.error(err);
    }
  }
  next();
  return;
};
