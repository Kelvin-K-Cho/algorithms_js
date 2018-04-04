const permutations = function(array) {
	if (array.length <= 1) {
		return [array];
	}

	let value = array.shift(); //1

	let perms = permutations(array); //[[]]

	let result = [];

	for (let i = 0; i < perms.length; i++) {
		for (let j = 0; j <= perms[i].length; j++) {
			let copy = perms[i].slice();
			copy.splice(j, 0, value);
			result.push(copy);
		}
	}

	return result;
};
