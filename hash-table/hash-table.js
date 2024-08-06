let vote = new Map(); // cria uma tabela hash vazia

function verifyVote(name) {
	// função para verificação de votos
	if (vote.has(name)) {
		// verifica se já existe o nome na tabela
		console.log("Você já votou");
	} else {
		vote.set(name, true); // depois da verificação, caso não houver o nome na tabela, vai adicionar o nome
		console.log("Aguarde sua vez!");
	}
}

verifyVote("Nelson");
verifyVote("Nelson");
