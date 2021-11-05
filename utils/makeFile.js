const path = require("path");
const fs = require("fs");

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
	});
};

module.exports = makeFile;
