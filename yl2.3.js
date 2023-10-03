const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`Sisestage enda vanus: `, age => {
	readline.question(`Sisestage enda sugu: `, sugu => {
		readline.question(`Sisestage treeningu tüüp: `, tüüp => {
			let ss = undefined;
			let minPul;
			let maxPul;
			let pulss;				
			if(sugu == "M" || sugu == "m"){
				ss= 0;
			}else if (sugu == "N" || sugu == "n"){
				ss= 1;
			}
			if(ss == 0){
				pulss = 220 - age
				}else{
				pulss = 206 - (age*0.88)
				}
				console.log(pulss)
			console.log(tüüp)
			switch(tüüp){
			case "1":
				minPul = pulss*0.5
				maxPul = pulss*0.7
			
				break;
			case "2":
				 minPul = pulss*0.7
				 maxPul = pulss*0.8
				 
				 break;
			case "3":
				minPul = pulss*0.8
				maxPul = pulss*0.87
				
				break;
			default:
				console.log("Vale treeningu tüüp");
				break;
			}

		console.log("Pulsisagedus peaks olema vahemikus " + Math.round(minPul) + " kuni " + Math.round(maxPul) +".");
		readline.close();

		});
	});
});