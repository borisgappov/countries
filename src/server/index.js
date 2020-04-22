const express = require('express');
const os = require('os');
var requestProxy = require('express-request-proxy');

const app = express();
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => {
  return res.send({ username: os.userInfo().username });
});

app.get(
  '/countries/rest/v2/:name/:param?',
  requestProxy({
    url: 'https://restcountries.eu/rest/v2/:name/:param?',
  })
);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
