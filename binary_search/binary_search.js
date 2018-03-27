function binarySearch(array, target) {
	if (array.length === 0) {
		return -1;
	}

	const mid = Math.floor(array.length / 2);

	if (array[mid] === target) {
		return mid;
	} else if (array[mid] > target) {
		const left = array.slice(0, mid);
		return binarySearch(left, target);
	} else {
		const right = array.slice(mid + 1);
		const sub = binarySearch(right, target);
		return sub === -1 ? -1 : sub + (mid + 1);
	}
}

module.exports = binarySearch;
