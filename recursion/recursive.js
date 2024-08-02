function countdown(fromN) {
	console.log(fromN);

	let nextNumb = fromN - 1;

	if (nextNumb >= 0) {
		countdown(nextNumb);
	}
}

countdown(5);
