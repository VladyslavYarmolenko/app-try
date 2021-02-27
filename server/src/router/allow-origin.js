/** @returns {import("express").RequestHandler} */
const allowOrigin = (origin) => (req, res, next) => {
	res.header({
		"Access-Control-Allow-Origin": origin,
		"Access-Control-Allow-Headers": [ "Content-Type" ],
	});
	next();
};

module.exports = allowOrigin;
