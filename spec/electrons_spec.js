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
});
