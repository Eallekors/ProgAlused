const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})


readline.question(`Sisestage ainepunktide arv: `, aine => {
	readline.question(`Sisestage nädalate arv: `, nädal => {
		console.log(Math.round((aine*26)/nädal));
		readline.close();
	});
});