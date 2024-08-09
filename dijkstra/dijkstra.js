function dijkstra(graph, startNode) {
	// função que inicia a tabela de distancia e conjunto de nós
	const distance = {}; // cria um objeto vazio que vai guardar as ditancias
	const visited = new Set(); // cria uma função construtora que vai guardar os nodes visitados
	const nodes = Object.keys(graph); // cria um array com os nodes

	nodes.forEach((node) => {
		// faz um loop em cada node para dar a disntancia deles como infinito
		distance[node] = Infinity;
	});
	distance[startNode] = 0; // seta o node inicial com a distância de 0

	while (nodes.length) {
		// faz um loop pelo comprimento dos nodes
		let closestNode = null; // encontra o nó não visitado com a menor distância
		for (const node of nodes) {
			// faz um loop em nada node e seus vizinhos
			if (
				!visited.has(node) &&
				(closestNode === null || distance[node] < distance[closestNode])
			) {
				// se um node nao foi visitado e o node mais perto não tem valor, aplica a distancia do node e compara qual proximo node tem o menor valor
				closestNode = node; // node mais proximo vira o node pai
			}
		}
		if (closestNode === null) break; // caso o não tenham mais nodes, encerra o loop

		visited.add(closestNode); // marca o node como visitado

		for (const neighbor in graph[closestNode]) {
			// cria um loop nos vizinhos marcados como mais próximos
			const distances = distance[closestNode] + graph[closestNode][neighbor]; // calcula as distâncias do node mais proximo com o node mais proximo do vizinho
			if (distances < distance[neighbor]) {
				// caso a distancia seja menor
				distance[neighbor] = distances; // atualiza os valores do vizinho mais próximo
			}
		}
		nodes.splice(nodes.indexOf(closestNode), 1); // remove o node mais proximo dos não visitados
	}
	return distance;
}

const graph = {
	// exemplo de grafo
	A: { B: 1, C: 4 },
	B: { A: 1, C: 2, D: 5 },
	C: { A: 4, B: 2, D: 1 },
	D: { B: 5, C: 1 },
};

const shortestPath = dijkstra(graph, "D"); // ativa a função que vai percorrer dentro do grafo e encontrar o caminho mais curto
console.log(shortestPath);
