function Electrons() { }
Electrons.prototype.count = function (dicerollArray) {
	const arrayLength = dicerollArray.length;
	const result = dicerollArray[arrayLength - 1] == 1 ? dicerollArray[0] == 1 ? 0 : 4 : dicerollArray[arrayLength - 1] + 1;
	return result;
};