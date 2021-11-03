const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const os = require("os");
const { reset } = require("chalk");

const generateComponent = (
	name = "Component",
	folder = false,
	css = false,
	lower = false
) => {
	if (folder) {
		fs.mkdir(path.join(__dirname, `/${capitalize(name)}`), {}, (err) => {
			if (err) throw err;
		});
		component(name, css, lower, folder);
	}
	if (!folder && name) {
		component(name, css, lower, folder);
	}
};

const component = (name, css, lower, folder) => {
	let caps_name = lower ? name.toLowerCase() : capitalize(name);
	const _p = folder
		? path.join(__dirname, `/${caps_name}`, `${caps_name}.js`)
		: path.join(__dirname, "./", `${caps_name}.js`);
	// fs.mkdir(path.join(__dirname, `/${caps_name}`), {}, (err) => {
	// 	if (err) throw err;
	// });

	if (css) {
		fs.writeFile(
			_p,
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
		makeFile(caps_name, folder);
	}

	if (css) {
		const _pcss = folder
			? path.join(__dirname, `/${caps_name}`, `${caps_name}.style.css`)
			: path.join(__dirname, `${caps_name}.style.css`);
		fs.writeFile(
			_pcss,
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

const makeFile = (caps_name, folder) => {
	const _p = folder
		? path.join(__dirname, `/${caps_name}`, `${caps_name}.js`)
		: path.join(__dirname, `${caps_name}.js`);

	fs.writeFile(
		_p,

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
