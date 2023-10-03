const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})
let porg = 0;
let test = 0;
readline.question(`Sisestage ringide arv `, num => {


	for(var i= 1 ; i <= num/2 ; i++){
			console.log(porg = porg+ 2);
			test += porg
		}
	


console.log("Porgandite koguarv on " + test );
readline.close();
});

