const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`Sisesta õhutemperatuur: `, temp => {
	readline.close();
	if (temp <= 4){
	console.log('On jäätumis oht')
}else{
	console.log('Ei ole jäätumis ohtu')
}
	

});
