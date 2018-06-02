module.exports = (hosts = {}) => {
  return (req, res, next) => {
    if (!req.hostname) return next();
    const server = hosts[req.hostname];
    if (server) {
      server.emit('request', req, res, next);
    } else {
      next();
    }
  }
}
