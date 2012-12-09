function Plateau(x, y) {
	var grid = new Array(x);
	var rovers = new Array(x*y);

	for (var i = 0; i < grid.length; i++) {
		grid[i] = new Array(y);
	};

	this.roverAt = function(x, y) {
		return grid[x][y];
	};

	this.executeCommandsFor = function(rover, commands)  {
		for (var i = 0; i < commands.length; i++) {
			commands[i].execute(rover);
		};

		var currentPosition = rover.currentPosition;
		grid[currentPosition.x][currentPosition.y] = rover;
	};
}