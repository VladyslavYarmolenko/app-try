const express = require("express");
const allowOrigin = require("../allow-origin");
const createCar = require("./create-car");
const getAllCars = require("./get-all-cars");

const router = express.Router();

router.route("/")
	.get((req, res) => {
		res.json(getAllCars());
	})
	.options(
		allowOrigin("http://localhost:3000"),
		(req, res) => {
			res.sendStatus(200);
		},
	)
	.post(
		allowOrigin("http://localhost:3000"),
		async (req, res) => {
			const id = await createCar({
				name: req.body.name,
				age: req.body.age,
			});

			res.status(201).json({ result: id });
		},
	);

module.exports = router;
