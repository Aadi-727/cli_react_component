const path = require("path");
const os = require("os");
const fs = require("fs");
const makeFile = require("./makeFile");
const capitalize = require("./capitalize");

const component = (name, css, lower, folder) => {
	let caps_name = lower ? name.toLowerCase() : capitalize(name);
	const _p = folder
		? path.join(process.cwd(), `/${caps_name}`, `${caps_name}.js`)
		: path.join(process.cwd(), "./", `${caps_name}.js`);
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
			? path.join(process.cwd(), `/${caps_name}`, `${caps_name}.style.css`)
			: path.join(process.cwd(), `${caps_name}.style.css`);
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

module.exports = component;
