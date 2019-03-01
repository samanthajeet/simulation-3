require('dotenv').config();
const express = require('express');
      ctrl = require('./controller')


const app = express();

app.use(express.json())


app.listen(4000, () => {console.log(`Bingpot on port 4000`)})