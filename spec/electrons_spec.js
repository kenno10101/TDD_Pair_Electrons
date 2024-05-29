describe('Electrons around the cores', function () {
	beforeEach(function () {
		game = new Electrons();
	});
	it('should return 0 for a string of 5 1s', function () {
		expect(game.count([1, 1, 1, 1, 1])).toEqual(0);
	});

	it('should return 6', function () {
		expect(game.count([1, 2, 3, 4, 5])).toEqual(6);
	})
	it('should return 4', function () {
		expect(game.count([2, 2, 3, 3, 1])).toEqual(4);
	})
	// [3,5,3,5,4,2] => 12
	it('should return 12', function () {
		expect(game.count([3, 5, 3, 5, 4, 2])).toEqual(12);
	})
	it('5 test cases', function () {
		expect(game.count([3, 1, 3, 5, 6, 2])).toEqual(8);
		expect(game.count([6, 4, 2, 1, 3, 4])).toEqual(2);
		expect(game.count([1, 4, 2, 1, 4])).toEqual(0);
		expect(game.count([6, 6, 6, 6])).toEqual(0);
		expect(game.count([4, 2, 3, 1, 2, 5])).toEqual(6);
	})
});
