const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('static'));

app.get("/",(req,res)=>{res.render("forms.ejs")});
app.listen(port,() => {
console.log("server is started ...");
});