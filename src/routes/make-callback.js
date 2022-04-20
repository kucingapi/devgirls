module.exports = (controller) => (req, res) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
  };
  controller(httpRequest)
    .then((httpResponse) => {
      res.set('Content-Type', 'application/json');
      res.type('json');

      const body = {
        success: true,
        code: 200,
        data: httpResponse,
      };
      res.status(200).send(body);
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
