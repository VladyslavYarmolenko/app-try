const express = require("express");
const createUser = require("./create-user");
const allowOrigin = require("./allow-origin");

const router = express.Router();

router.route("/")
	.get((req, res) => {
		res.send("Hello world!");
	});

router.route("/users")
	.get((req, res) => {
		res.sendStatus(405);
	})
	.post(
		allowOrigin("foo.com"),
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
