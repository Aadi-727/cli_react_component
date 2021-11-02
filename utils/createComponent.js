const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const os = require("os");

const generateComponent = (name = "Component", folder = false, css = false) => {
	if (folder) {
		componentInFolder(name);
	}
};

const componentInFolder = (name) => {
	const caps_name = capitalize(name);
	fs.mkdir(path.join(__dirname, `/${caps_name}`), {}, (err) => {
		if (err) throw err;
	});

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
};

const capitalize = (name) => {
	return name.charAt(0).toUpperCase() + name.substring(1);
};

// import React from 'react'

// const createComponent = () => {
// 	return (
// 		<div>

// 		</div>
// 	)
// }

// export default createComponent
module.exports = generateComponent;
