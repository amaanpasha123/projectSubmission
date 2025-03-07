const bodyParser = require("body-parser");
// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsyc.js"); // Corrected the import name// Corrected the import name
// const ExpressError = require("./utils/ExpressErrors.js"); // Corrected filename
// const { listingSchema, reviewSchema } = require("./schema.js");


const app = express();
const port = 3000;


// EJS engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));



// Serve the HTML form
app.get("/", (req, res) => {
    res.render("form.ejs");
});


// Handle form submission
app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    res.render("show.ejs",{name, email});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
