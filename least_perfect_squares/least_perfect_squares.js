const leastPerfectSquares = number => {
	let squares = countSquares(number);

	let results = [0];

	while (results.length !== number + 1) {
		let options = [];

		for (let i = 0; i < squares.length; i++) {
			let square = squares[i];

			if (results.length - square >= 0) {
				options.push(results[results.length - square] + 1);
			}
		}

		results.push(Math.min(...options));
	}

	return results[results.length - 1];
};

const countSquares = number => {
	let results = [];

	for (let i = 1; i <= Math.sqrt(number); i++) {
		let square = Math.pow(i, 2);
		results.push(square);
	}

	return results;
};
