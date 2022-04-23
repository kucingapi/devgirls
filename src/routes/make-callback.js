module.exports = (controller) => (req, res) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    headers: {
      authToken: req.header('auth-token'),
    },
  };
  controller(httpRequest)
    .then((httpResponse) => {
      res.set('Content-Type', 'application/json');
      res.type('json');

      if (httpResponse.header) {
        const body = {
          success: true,
          code: 200,
        };
        const { name, data } = httpResponse.header;
        res.header(name, data).send(data);
        res.status(200).send(body);
      } else {
        const body = {
          success: true,
          code: 200,
          data: httpResponse,
        };
        res.status(200).send(body);
      }
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
