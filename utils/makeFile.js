const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const makeFile = (caps_name, folder) => {
	const react_snippet = `const ${caps_name} = () => { 
	return (
		<div>
				
		</div>
		)
	}

	export default ${caps_name}\n
	`;
	const _p = folder
		? path.join(process.cwd(), `/${caps_name}`, `${caps_name}.js`)
		: path.join(process.cwd(), `${caps_name}.js`);

	fs.writeFile(_p, react_snippet, (err) => {
		if (err) throw err;
		console.log(
			chalk.green.bold("Component created with ") +
				chalk.bgHex("#e67b35").bold(` ${caps_name}.js `)
		);
	});
};

module.exports = makeFile;
