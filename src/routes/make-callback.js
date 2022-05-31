module.exports = (controller) => (req, res) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    files: req.files,
    headers: {
      authToken: req.header('authorization'),
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
          ...httpResponse.body,
        };
        const { name, data } = httpResponse.header;
        res.header(name, data).send(body);
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
      console.error(e);
      if (!e.statusCode) {
        e.statusCode = 500;
      }
      if (!e.message) {
        e.statusCode = 'something went wrong';
      }
      res.status(e.statusCode).send({
        success: false,
        code: e.statusCode,
        error: {
          description: e.message,
        },
      });
    });
};
