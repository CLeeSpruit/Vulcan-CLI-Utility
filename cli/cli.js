#!/usr/bin/env node
const meow = require('meow');

const cli = meow(`
	Usage
		$ {{pkg}} <input>

	Options
		--verbose, Displays all output

	Examples
		$ {{pkg}} generate --verbose
		-- Generates with all debug text
`);

cli.showHelp();
