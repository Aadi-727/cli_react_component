const path = require("path");
const os = require("os");
const fs = require("fs");

const makeFile = (caps_name, folder) => {
	const _p = folder
		? path.join(process.cwd(), `/${caps_name}`, `${caps_name}.js`)
		: path.join(process.cwd(), `${caps_name}.js`);

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

module.exports = makeFile;
