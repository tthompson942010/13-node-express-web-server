const express = require("express");
const bodpars = require("body-parser");
const path = require("path");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(bodpars.json());
app.use(bodpars.urlencoded({extended: true}));
app.use(bodpars.text());
app.use(bodpars.json({type: "application/vnd.api+json"}));
app.use(express.static('app/public'));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
	console.log("app listening on port " + PORT);
})