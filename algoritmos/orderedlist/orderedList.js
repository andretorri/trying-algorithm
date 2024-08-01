/*
function buscaMenor(arr) {
	let menor = arr[0];
	let menorIndice = 0;
	for (i = 1; i < menor.lenght; i++) {
		if (arr[i] < menor) {
			menor = arr[i];
			menorIndice = i;
		}
	}
	return menorIndice;
}

function ordenaSelecao(arr) {
	let novoArray = [];
	for (i = 0; i < novoArray.length; i++) {
		const menorIndice = buscaMenor(arr);
		novoArray.push(novoArray.splice(menorIndice, 1)[0]);
	}
	return novoArray;
}

console.log(ordenaSelecao([5, 2, 4, 10]));
*/

function buscaMenor(arr) {
	//função de busca do menor índice de um array
	let menorNumero = arr[0]; //primeiro elemento do array
	let menorIndice = 0; //menor numero do array
	for (let i = 1; i < arr.length; i++) {
		//percorre o array a partir do segundo elemento
		if (arr[i] < menorNumero) {
			//sempre que o menorNumero for menor, vai atualizar as variaveis
			menor = arr[i]; //atualização de variavel
			menorIndice = i; //atualização de variavel
		}
	}
	return menorIndice; //retorna o indice do menor elemento
}

function ordenaSelecao(arr) {
	//função de ordenar o array
	const novoArray = []; //criação de um novo array para armazenar os elementos ordenados
	const n = arr.length; //salvar o cumprimento do array para usar no loop for
	for (let i = 0; i < n; i++) {
		//executa um loop igual ao tamanho do array original
		const menorIndice = buscaMenor(arr); //chama a função buscaMenor para enbcontrar o menor índice do novo array
		novoArray.push(arr.splice(menorIndice, 1)[0]); //encontra o elemento do índice, remove do array original e adiciona ao novo array
	}

	return novoArray; //retorna o array ordenado do menor para o maior
}
console.log(buscaMenor(2, 3, 7, 8, 4));
console.log(ordenaSelecao([5, 2, 4, 1, 10]));
