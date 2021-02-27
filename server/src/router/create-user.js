const uuid = require("uuid").v4;
const users = require("./users");

/** @private */
function createID() {
	return uuid();
}

/**
 * @param {users.User} param0
 * @return {Promise<string>}
 */
async function createUser({ name }) {
	const id = createID();
	const user = { id, name };

	users.push(user);

	return id;
}

module.exports = createUser;
