const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question(`Sisestage astme alus: `, x => {
	readline.question(`Sisestage astendaja: `, y => {
		console.log(x ** y);
		readline.close()
	});
});