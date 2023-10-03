const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`Täringute arv `, num => {


	for(var i= 1 ; i <= num ; i++){
			let rand = Math.floor((Math.random() * 6)+1);
			console.log(rand);
		}
	



readline.close();
});

