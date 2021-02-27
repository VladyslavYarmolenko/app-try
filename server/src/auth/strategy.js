const { Strategy: LocalStrategy } = require("passport-local");
const users = require("./users");

const strategy = new LocalStrategy((username, password, done) => {
	if (username in users === false)
		return done(new Error(`User "${username}" is not found`));

	const user = users[username];

	if (user.password !== password)
		return done(new Error("Passwords do not match!"));

	done(null, user);
});

module.exports = strategy;
