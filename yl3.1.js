const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`Sisestage mitu korda äratada: `, num => {
	readline.close();
	for (var i = num - 1; i >= 0; i--) {
		console.log("Tõuse ja sära");
	}
});