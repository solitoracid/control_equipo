const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

const homeStartingContent = "Bienvenido";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
    
    res.render("home", {
        startingContent: homeStartingContent
    })

});

app.get("/inventario", (req, res) =>{
    res.render("inventario");
});

app.get("/reportes", (req, res) =>{
    res.render("reportes");
});

app.get("/configuracion", (req, res) =>{
    res.render("configuracion");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
  