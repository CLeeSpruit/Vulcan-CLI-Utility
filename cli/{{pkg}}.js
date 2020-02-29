async function {{pkg}}(cli) {
	const command = cli.input[0];

	switch (command) {
		default:
			return cli.showHelp();
	}
}

module.exports = {{pkg}};
