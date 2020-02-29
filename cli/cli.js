#!/usr/bin/env node
const meow = require('meow');
const pkg = require('{{pkg}}.js');

const cli = meow(`
	Usage
		$ {{pkg}} <input>

	Options
		--verbose, Displays all output

	Examples
		$ {{pkg}} generate --verbose
		-- Generates with all debug text
`);

pkg(cli);
