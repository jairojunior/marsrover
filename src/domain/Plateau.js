var Plateau = function(x, y) {
	this.grid = new Array(x);
	this.rovers = new Array(x*y);

	for (var i = 0; i < this.grid.length; i++) {
		this.grid[i] = new Array(y);
	};

};

Plateau.prototype.executeCommandsFor = function(rover, commands)  {
	commands.forEach(function(command) {
		command.execute(rover);
	});

	var currentPosition = rover.currentPosition;
	this.grid[currentPosition.x][currentPosition.y] = rover;
};

Plateau.prototype.roverAt = function(x, y) {
	return this.grid[x][y];
}