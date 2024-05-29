function Electrons() { }
Electrons.prototype.count = function (dicerollArray) {
	let result = 0;
	const values = [0, 0, 0, 2, 0, 4, 6];
	dicerollArray.forEach(num => {
		result += values[num];
	});
	return result;
};