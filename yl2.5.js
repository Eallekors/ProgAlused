const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`Sisestage kirja suurus: `, size => {
	readline.question(`Sisestage kirja teema pealkiri: `, titl => {
		readline.question(`Kas kirjaga on kaasa fail: `, fail => {
			if(titl == "" || fail == "jah" && size > 1){
				console.log("Kiri on spämm")
			}else {
				console.log("Kiri ei ole spämm")
			}

	
		readline.close();

		});
	});
});