class Graph {
	// cria a classe grafo
	constructor() {
		this.adjacencyList = {}; // cria uma lista adjacente vazia para o grafo
	}

	addVertex(vertex) {
		// cria uma vértice para o grafo
		if (!this.adjacencyList[vertex]) {
			// faz a checagem se o vértice já existe na lista adjacente
			this.adjacencyList[vertex] = []; // caso não exista o vértice, cria um novo vértice como um array [] vazio para guardar os novos vizinhos
		}
	}

	addEdge(vertex1, vertex2) {
		// cria conexões para os vértices que já existem
		// vertex1 e vertex2 identificam os dois vértices que vão se conectar
		this.adjacencyList[vertex1].push(vertex2); // adiciona os vizinhos do vertex2 para a lista adjacente do vertex1
		this.adjacencyList[vertex2].push(vertex1); // adiciona os vizinhos do vertex1 para a lista adjacente do vertex2
	}

	bfs(startingNode) {
		// sistema de busca BFS
		let queue = [startingNode]; // cria uma fila para visitar os vertices
		let visited = {}; // cria um objeto para armazenar os que já foram visitador
		visited[startingNode] = true;

		while (queue.length) {
			// faz um loop de repetição do cumprimento da fila
			let currentNode = queue.shift(); // enquanto faz a busca, remove o primeiro da lista e marca como visitado
			console.log(currentNode);

			this.adjacencyList[currentNode].forEach((neighbor) => {
				// acessa a list de vizinhos do node atual e itera a cada vizinho na list de vizinhos do node atual
				if (!visited[neighbor]) {
					// faz a checagem se o vizinho atual já foi visitado
					visited[neighbor] = true; // caso ja tenha sido visitado marca o vizinho para não ocorrer outra vizita
					queue.push(neighbor); // adiciona o vizinho na fila para futura exploração da proxima iteração do loop principal
				}
			});
		}
	}
}

let graph = new Graph(); // cria um novo grafo
graph.addVertex("A"); // adição dos vértices
graph.addVertex("B"); // adição dos vértices
graph.addVertex("C"); // adição dos vértices
graph.addVertex("D"); // adição dos vértices
graph.addEdge("A", "B"); // adição das conexões entre vértices
graph.addEdge("A", "C"); // adição das conexões entre vértices
graph.addEdge("B", "D"); // adição das conexões entre vértices
graph.bfs("C");
