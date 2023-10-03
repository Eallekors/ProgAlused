const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

let jaak = 14;
readline.question(`Mitu põialpoissi tahab õuna `, num => {
	for(var i= 1; i <= num ;i++){
		let rand = Math.floor((Math.random() * 2)+1);
		console.log(rand);
		jaak -= rand;
	}
	console.log("Lumivalgekesele jäi " + jaak)
readline.close();
});
