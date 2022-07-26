const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
//Initializations
const app = express();

//routes
app.use(require('./routes/routes'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//Settings
app.engine('ejs',engine);
app.set('view engine', 'ejs');
var dirName = path.join(__dirname,'views');
app.set('views', dirName);

app.listen(3000, () => {
    console.log("Server on port 3000");
});