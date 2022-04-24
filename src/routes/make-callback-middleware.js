module.exports = (middleware) => (req, res, next) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    headers: {
      authToken: req.header('authorization'),
    },
  };
  middleware(httpRequest)
    .then(() => {
			next();
    })
    .catch((e) => {
      res.status(e.statusCode).send({
        success: false,
        code: e.statusCode,
        error: {
          description: e.message,
        },
      });
    });
};
