const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { reset } = require("chalk");
const component = require("./component");
const capitalize = require("./capitalize");
const generateComponent = (
	name = "Component",
	folder = false,
	css = false,
	lower = false
) => {
	if (folder) {
		fs.mkdir(path.join(process.cwd(), `/${capitalize(name)}`), {}, (err) => {
			if (err) throw err;
		});
		component(name, css, lower, folder);
	}
	if (!folder && name) {
		component(name, css, lower, folder);
	}
};

/*
*,
*::before,
*::after {
	box-sizing: border-box;
}
*/

module.exports = generateComponent;
