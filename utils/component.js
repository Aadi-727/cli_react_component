const path = require("path");
const fs = require("fs");
const makeFile = require("./makeFile");
const capitalize = require("./capitalize");

const component = (name, css, lower, folder) => {
	const caps_name = lower ? name.toLowerCase() : capitalize(name);
	const _p = folder
		? path.join(process.cwd(), `/${caps_name}`, `${caps_name}.js`)
		: path.join(process.cwd(), "./", `${caps_name}.js`);

	const react_snippet = `import \"./${caps_name}.style.css\"
const ${caps_name} = () => { 
	return (
		<div>
				
		</div>
		)
	}

	export default ${caps_name}\n
	`;
	if (css) {
		fs.writeFile(_p, react_snippet, (err) => {
			if (err) throw err;
		});
	} else {
		makeFile(caps_name, folder);
	}

	const css_snippet = `*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	background: #fafafa;
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	font-size: 16px;
	line-height: 1.5;
}	
	`;
	if (css) {
		const _pcss = folder
			? path.join(process.cwd(), `/${caps_name}`, `${caps_name}.style.css`)
			: path.join(process.cwd(), `${caps_name}.style.css`);
		fs.writeFile(_pcss, css_snippet, "utf-8", (err) => {
			if (err) throw err;
		});
	}
};

module.exports = component;
