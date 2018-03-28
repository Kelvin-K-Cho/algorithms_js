const lis = function(array) {
	let obj = {};
	let first = array[0];
	obj[1] = [first];
	let count = 1;
	let temp;

	for (let i = 1; i < array.length; i++) {
		let value = array[i];
		if (value > obj[count][count - 1]) {
			temp = obj[count].slice(0);
			temp.push(value);
			count++;
			obj[count] = temp;
		} else {
			for (let j = count; j > 0; j--) {
				temp = obj[j];
				let last = temp.length - 1;
				if (value < temp[last] && value > temp[last - 1]) {
					temp.pop();
					temp.push(value);
					break;
				} else if (value > temp[last]) {
					temp = obj[j].slice(0);
					temp.push(value);
					let len = temp.length;
					obj[len] = temp;
					break;
				} else {
					continue;
				}
			}
		}
	}

	return count;
};

module.exports = lis;
