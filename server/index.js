require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller')

    
const app = express();
const { MASSIVE_STRING, SERVER_PORT} = process.env;

app.use(express.json())



massive(MASSIVE_STRING).then( db => {
  app.set('db', db);
  app.listen(SERVER_PORT, () => {console.log(`Bingpot on port ${SERVER_PORT}`)})
})


//endpoints

app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login)
