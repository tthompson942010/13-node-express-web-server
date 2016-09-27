const express = require("express");
const bodpars = require("body-parser");
const path = require("path");

const app = express();
var PORT = process.env.PORT || 80;

app.use(bodpars.json);
app.use(bodpars.urlencoded({extended: true}));
app.use(bodpars.text());
app.use(bodpars.json({type: "application/vnd.api+json"}));

require("./app/routing/api-routes.js");
require("./app/routing/html-routes.js");

app.listen(PORT, function{
	console.log("app listening on port " + PORT);
})