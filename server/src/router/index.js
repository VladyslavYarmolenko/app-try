const express = require("express");
const createUser = require("./create-user");
const allowOrigin = require("./allow-origin");

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

router.route("/users")
	.get((req, res) => {
		res.sendStatus(405);
	})
	.post(
		allowOrigin("http://localhost:3000"),
		async (req, res) => {
			const id = await createUser({
				name: req.body.name,
			});

			res
				.status(201)
				.json({
					result: id,
				});
		},
	);

module.exports = router;
