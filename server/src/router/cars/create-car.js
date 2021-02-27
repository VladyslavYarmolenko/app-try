const uuid = require("uuid").v4;
const list = require("./list");

/** @private */
function createID() {
	return uuid();
}

/**
 * @param {list.Car} car
 * @return {Promise<string>}
 */
async function createCar({ name, age }) {
	const id = createID();

	list.push({ id, name, age });

	return id;
}

module.exports = createCar;
