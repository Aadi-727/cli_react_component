const app = require("commander");
const chalk = require("chalk");
const generateComponent = require("./utils/createComponent");
app.version("1.0.0").description("React component generator CLI");

app
	.option(
		"-n, --name <name> ",
		"creates the component in a folder",
		"Component"
	)
	.option("-f, --folder", "creates the component in a folder")
	.option("-c, --stylesheet, --css", "include a stylesheet file")
	.option("-i, --importcss", "import the css file in jsx file")
	.parse();

const { name, folder, stylesheet, importcss } = app.opts();
console.log(name, folder, stylesheet);
if (name) {
	generateComponent(name, folder, stylesheet, importcss);
}
