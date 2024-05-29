function Electrons() { }
Electrons.prototype.count = function (dicerollArray) {
	const arrayLength = dicerollArray.length;
	const checkLastNumOne = dicerollArray[arrayLength - 1] == 1;
	const checkFirstNumOne = dicerollArray[0] == 1;
	let lastNum = dicerollArray[arrayLength - 1];
	const result = checkLastNumOne ? (checkFirstNumOne ? 0 : 4) : (lastNum + 1);
	return result;
};