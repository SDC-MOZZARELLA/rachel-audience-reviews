const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use(express.static('client/dist'));
app.listen(PORT, console.log(`Server started on port ${PORT}`));