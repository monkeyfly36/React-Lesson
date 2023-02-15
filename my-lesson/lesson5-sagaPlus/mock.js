const express = require('express');
const apiMocker = require('mocker-api');

const app = express();

apiMocker(app, {
  'GET /api/user': 
    [
      {
        index: 0,
        name: 'h'
      }, {
        index: 1,
        name: 'x'
      }
    ]
  }
)

app.listen(8082);
