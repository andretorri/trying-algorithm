function quickSort(array) {
	if (array.length <= 1) {
		//se o array for 1 ou menor, vai retornar o próprio array
		return array;
	}

	const pivotIndex = Math.floor(Math.random() * array.length); // faz o pivo ser um número aleatório de dentro do array
	const pivot = array[pivotIndex]; // grava o pivo aleatório gerado dentro de uma variavel
	const left = []; //cria um array vazio para os menores números
	const right = []; // cria um array vazio para os maiores números

	for (let i = 0; i < array.length; i++) {
		// faz um loop pelo cumprimento do array e caso o loop chegue no número pivotado, continuará pelo próximo da lista
		if (i === pivotIndex) {
			continue;
		}
		if (array[i] < pivot) {
			// se o loop no array for menor que o número pivotado, jogara esse número para dentro do array esquerdo(menores números)
			left.push(array[i]);
		} else {
			// se o loop no array for maior que o pivotado, joga o número para dentro do array direito (maiores numeros)
			right.push(array[i]);
		}
	}

	return quickSort(left).concat([pivot], quickSort(right)); // retorna o array esquerdo(menores números) concatenado com o número pivotado e também o array direito(maiores números)
}

console.log(quickSort([1, 5, 6, 2, 3, 9, 7])); // exemplo de números sortidos
