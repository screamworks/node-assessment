
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.json());

const userCtrl = require('./usersCtrl.js');


app.get('/api/users', userCtrl.getUsers);

app.get('/api/users/:id', userCtrl.getUser);

app.get('/api/admins', userCtrl.getAdmin);

app.get('/api/nonadmins', userCtrl.getNoAdmin);

app.get('/api/user_type/:type', userCtrl.getType);

app.put('/api/users/:id', userCtrl.putUser);

app.post('/api/users', userCtrl.postUser);

app.delete('/api/users/:id', userCtrl.delUser);


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
