const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question(`Sisestage oma nimi: `, nimi => {
	readline.question(`Sisestage lubatud kiirus (km/h): `, lub => {
		readline.question(`Sisestage tegelik kiirus (km/h): `, teg => {
			res = (teg - lub)*3
			console.log(nimi + ', kiiruse ületamise eest on teie trahv ' + Math.min(190,res) + ' eurot');
			readline.close()
			});
	});
});