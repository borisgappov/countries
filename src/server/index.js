const express = require('express');
const os = require('os');
const requestProxy = require('express-request-proxy');
const getTransforms = require('./transform');


const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
  return res.send({ username: os.userInfo().username });
});

app.get(
  '/countries/rest/v2/:name/:param?',
  (req, res) => {
    return requestProxy({
      url: 'https://restcountries.eu/rest/v2/:name/:param?',
      transforms: req.params.name === 'all' ? getTransforms(req) : null,
    })(req, res);
  }
);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
