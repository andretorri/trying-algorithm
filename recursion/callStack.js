function hello() {
	const name = "roberto";
	console.log(`Hello ${name}!`);
	hello2();
	bye();
}

function hello2() {
	const pergunta = "How are you?";
	console.log(pergunta);
}

function bye() {
	const cya = "Bye, see you!";
	console.log(cya);
}

hello();
