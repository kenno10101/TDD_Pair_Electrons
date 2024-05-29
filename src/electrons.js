function Electrons() { }
const values = [0, 0, 2, 0, 4, 0];
Electrons.prototype.count = function (dicerollArray) {
	return dicerollArray.reduce((sum, v) => sum + values[v - 1], 0)
};