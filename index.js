#!/usr/bin/node env

const app = require("commander");
const chalk = require("chalk");
const generateComponent = require("./utils/createComponent");
app.version("1.0.0").description("React component generator CLI");

app
	.option("-f, --folder", "creates the component in a folder")
	.option("-l, --lower", "creates the component in a lower case name")
	.option("-css, --stylesheet", "include a stylesheet file")
	.option("-c, --custom", "Specify a custom name for the component")

	.parse();

let fileName = process.argv[2];

const { folder, stylesheet, lower, custom } = app.opts();
if (fileName) {
	generateComponent(fileName, folder, stylesheet, lower, custom);
} else {
	console.log(chalk.red.bold("No name for component"));
	return;
}
