describe("Plateau", function() {

	var initialPoint;
	var plateau;

	beforeEach(function() {
		plateau = new Plateau(5,5);
	});

	describe("#executeCommandsFor", function() {
		describe("when a Rover is at (0,0) heading North and F,F,R,F,F commands are executed", function() {
			it("should put the rover at (2,2)", function() {
				var rover = new Rover(new Point(0,0), new NorthHeading());

				var commands = [new MoveForwardCommand(), 
							new MoveForwardCommand(), 
							new RotateRightCommand(), 
							new MoveForwardCommand(), 
							new MoveForwardCommand()];

				plateau.executeCommandsFor(rover, commands);

				expect(rover.currentPosition).toEqual(new Point(2,2));
				expect(plateau.roverAt(2,2)).toEqual(rover);
			});	
		})

		describe("when a Rover is at (3,3) heading East and B,B,L,F,B commands are executed", function() {
			it("should put the rover at (1,3)", function() {
				var rover = new Rover(new Point(3,3), new EastHeading());

				var commands = [new MoveBackwardCommand(), 
							new MoveBackwardCommand(), 
							new RotateLeftCommand(), 
							new MoveForwardCommand(), 
							new MoveBackwardCommand()];

				plateau.executeCommandsFor(rover, commands);

				expect(rover.currentPosition).toEqual(new Point(1,3));
				expect(plateau.roverAt(1,3)).toEqual(rover);
			});	
		})
	});

});