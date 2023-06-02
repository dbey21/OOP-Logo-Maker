const CLI = require('./lib/cli.js');
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');

const cli = new CLI();

cli.run();
