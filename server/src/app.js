const express = require("express");
const session = require("express-session");
const passport = require("passport");
const router = require("./router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({
	secret: "my secret 123!",
	saveUninitialized: false,
	resave: true,
	cookie: {
		maxAge: 10_000,
		httpOnly: false,
	},
}));

// app.use(require('cookie-parser')()); TODO:
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

module.exports = app;
