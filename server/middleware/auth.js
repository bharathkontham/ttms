module.exports = () => {
  return (req, res, next) => {
    // YXV0aGVudGljYXRl
    const token = req.headers.authorization || req.query.access_token;
    if (token !== Buffer.from('authenticate', 'utf8').toString('base64')) {
      const error = new Error('Unauthorized!');
      error.statusCode = 401;
      return next(error);
    }
    next();
  };
};