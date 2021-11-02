const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const os = require("os");
const { reset } = require("chalk");

const generateComponent = (
	name = "Component",
	folder = false,
	css = false,
	imp_css = false
) => {
	if (folder) {
		fs.mkdir(path.join(__dirname, `/${capitalize(name)}`), {}, (err) => {
			if (err) throw err;
		});
		component(name, css, imp_css);
	}
};

const component = (name, css, imp_css) => {
	const caps_name = capitalize(name);
	// fs.mkdir(path.join(__dirname, `/${caps_name}`), {}, (err) => {
	// 	if (err) throw err;
	// });

	if (imp_css) {
		fs.writeFile(
			path.join(__dirname, `/${caps_name}`, `${caps_name}.js`),
			`import "${caps_name}.style.css;"` +
				os.EOL +
				os.EOL +
				`const ${caps_name} = () => { ` +
				os.EOL +
				"	return (" +
				os.EOL +
				"		<div>" +
				os.EOL +
				os.EOL +
				"		</div>" +
				os.EOL +
				" )" +
				os.EOL +
				"}" +
				os.EOL +
				os.EOL +
				`export default ${caps_name}`,
			"utf-8",
			(err) => {
				if (err) throw err;
			}
		);
	} else {
		fs.writeFile(
			path.join(__dirname, `/${caps_name}`, `${caps_name}.js`),

			`const ${caps_name} = () => { ` +
				os.EOL +
				"	return (" +
				os.EOL +
				"		<div>" +
				os.EOL +
				os.EOL +
				"		</div>" +
				os.EOL +
				" )" +
				os.EOL +
				"}" +
				os.EOL +
				os.EOL +
				`export default ${caps_name}`,
			"utf-8",
			(err) => {
				if (err) throw err;
			}
		);
	}

	if (css) {
		fs.writeFile(
			path.join(__dirname, `/${caps_name}`, `${name}.style.css`),
			"*," +
				os.EOL +
				"*::before," +
				os.EOL +
				"*::after {" +
				os.EOL +
				" box-sizing: border-box;" +
				os.EOL +
				"}" +
				os.EOL +
				os.EOL +
				"body {" +
				os.EOL +
				"font-family: 'Roboto', sans-serif;" +
				os.EOL +
				"font-size: 16px;" +
				os.EOL +
				"margin: 0;" +
				os.EOL +
				"padding: 0;" +
				os.EOL +
				"}",
			"utf-8",
			(err) => {
				if (err) throw err;
			}
		);
	}
};

const capitalize = (name) => {
	return name.charAt(0).toUpperCase() + name.substring(1);
};

/*
*,
*::before,
*::after {
	box-sizing: border-box;
}
*/

module.exports = generateComponent;
