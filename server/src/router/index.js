const express = require("express");
const carsRouter = require("./cars");

const router = express.Router();

router.route("/")
	.get((req, res) => {
		if (req.session.views) {
			req.session.views++
			res.send(`views: ${req.session.views}, expires in: ${req.session.cookie.maxAge / 1000}s`);
		} else {
			req.session.views = 1;
			res.send('welcome to the session demo. refresh!');
		}
	});

router.route("/self")
	.get(() => {
		// if authenticated, return self
		// otherwise, render login page
	})
	.post(() => {
		// authenticate self with username and password
	})
	.delete(() => {
		// sign out
	});

router.use("/cars", carsRouter);

module.exports = router;
