const fs = require("fs");
const path = require("path");
const component = require("./component");
const capitalize = require("./capitalize");
const generateComponent = (
	name = "Component",
	folder = false,
	css = false,
	lower = false,
	custom = false
) => {
	let caps_name = name;

	if (!custom) {
		caps_name = lower ? name.toLowerCase() : capitalize(name);
	}
	if (folder) {
		fs.mkdir(path.join(process.cwd(), `/${caps_name}`), {}, (err) => {
			if (err) throw err;
		});
		component(caps_name, css, folder);
	}
	if (!folder && name) {
		component(caps_name, css, folder);
	}
};

module.exports = generateComponent;
