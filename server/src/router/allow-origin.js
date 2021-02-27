const allowOrigin = (origin) => (req, res) => {
	res.header({
		"Access-Control-Allow-Origin": origin,
	});
};

module.exports = allowOrigin;
