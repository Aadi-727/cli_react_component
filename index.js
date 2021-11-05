#!/usr/bin/node env

const app = require("commander");
const chalk = require("chalk");
const generateComponent = require("./utils/createComponent");
app.version("1.0.0").description("React component generator CLI");

app
	.option("-f, --folder", "creates the component in a folder")
	.option("-l, --lower", "creates the component in a lower case name")
	.option("-c, --stylesheet, --css", "include a stylesheet file")
	.parse();

let fileName = process.argv[2];

console.log(process.cwd());
const { folder, stylesheet, lower } = app.opts();
if (fileName) {
	generateComponent(fileName, folder, stylesheet, lower);
} else {
	console.log(chalk.red(chalk.bold("No name for component")));
	return;
}
