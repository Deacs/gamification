// Commented JS code
var app = require('express').createServer();
app.get('/', function(req, res) {
    res.send('Hi there, from <a href="http://appfog.com">AppFog.com</a>. This is updated text. Update attempted as regular user. IN WORK!');
});
app.listen(process.env.VCAP_APP_PORT || 3000);
