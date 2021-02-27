/** @returns {import("express").RequestHandler} */
const allowOrigin = (origin) => (req, res, next) => {
	res.header({
		"Access-Control-Allow-Origin": origin,
	});
	next();
};

module.exports = allowOrigin;
