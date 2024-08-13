function greedyBackpack(itens, volume) {
	itens.sort((a, b) => b.value / b.weight - a.value / a.weight); // ordena os itens por valor por peso decrescente
	const backpack = []; // cria uma lista de array vazia
	let totalWeight = 0; // declara o peso total inicial da mochila como 0

	for (const item of itens) {
		// cria um loop que vai passar em todos os itens passados
		if (totalWeight + item.weight <= volume) {
			// se o peso total + o peso do item for menor que o volume da mochila
			backpack.push(item); // adiciona o item a mochila
			totalWeight += item.weight; // atualiza o peso total acrescentando o peso do item
		}
	}
	return backpack;
}

const itens = [
	// cria uma lista de itens que serão avaliados pela funcção da mochila
	{ name: "gold", weight: 2, value: 20 },
	{ name: "silver", weight: 3, value: 15 },
	{ name: "jelwery", weight: 1, value: 10 },
];

const backpackCap = 4; // peso máximo suportado pela mochila
const backpackItens = greedyBackpack(itens, backpackCap); // adiciona os itens e seu peso a mochila gulosa
console.log("Itens na mochila:", backpackItens); // lista os itens, peso e valor dos itens que foram adicionados a mochila
