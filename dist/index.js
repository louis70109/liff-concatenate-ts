"use strict";
var express = require("express");
var app = express();
var port = Number(process.env.PORT) || 5000;
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.get("/notify", function (req, res) {
    if (req.query["liff.state"]) {
        res.render("redirect", {
            liffId: process.env.CONCAT_ID,
        });
    }
    res.render("index", {
        fragments: req.query,
        liffId: process.env.CONCAT_ID,
    });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
