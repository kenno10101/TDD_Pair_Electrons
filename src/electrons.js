function Electrons() { }
Electrons.prototype.count = function (dicerollArray) {
	const arrayLength = dicerollArray.length;
	if (dicerollArray[arrayLength - 1] == 1) {
		return 0;
	}
	return dicerollArray[arrayLength - 1] + 1;
};