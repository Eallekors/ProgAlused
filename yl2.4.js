const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`Kas soovite istekohta ise valid("ise") või loosida ("loos")? :  `, valik => {
		let rand;
		let iste;
			switch(valik){
			case "ise":
				readline.question(`Kas soovite istuda akna ääres("aken") või mitte ("muu")? :  `, koht => {
					if(koht == "aken"){
						iste = "Aknakoht";
					}else if (koht == "muu"){
						iste = "Vahekäigukoht"
					}else {
						iste = "Vale sisestus"
					}
					console.log("Valisite ise. " + iste);
					readline.close();
				});
				
				break;
			case "loos":
					rand = Math.floor(Math.random() * 2)
						if(rand == 0){
							iste = "Aknakoht";
						}else{
							iste = "Vahekäigukoht"
						}
						console.log("Istekoht loositi. " + iste);
						readline.close();
				break;
		}

		
		
	
});