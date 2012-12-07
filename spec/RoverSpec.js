describe("Rover", function() {

	var currentPosition;
	var initialPosition;

	beforeEach(function() {
		currentPosition = Point(0,0);
	});

	describe("#rotateLeft", function() {

		describe("when a Rover is heading North", function() {
			it("should turn West", function() {
				var rover = new Rover(currentPosition, new NorthHeading());
				rover.rotateLeft();

				expect(rover.heading).toEqual(new WestHeading());
			});
		});
		
		describe("when a Rover is heading West", function() {
			it("should turn South", function() {
				var rover = new Rover(currentPosition, new WestHeading());
				rover.rotateLeft();

				expect(rover.heading).toEqual(new SouthHeading());
			});
		});

		describe("when a Rover is heading South", function() {
			it("should turn East", function() {
				var rover = new Rover(currentPosition, new SouthHeading());
				rover.rotateLeft();

				expect(rover.heading).toEqual(new EastHeading());
			});		
		});

		describe("when a Rover is heading East", function() {
			it("should turn North", function() {
				var rover = new Rover(currentPosition, new EastHeading());
				rover.rotateLeft();

				expect(rover.heading).toEqual(new NorthHeading());
			});
		});
	});

	describe("#rotateRight", function() {

		describe("when a Rover is heading North", function() {
			it("should turn East", function() {
				var rover = new Rover(currentPosition, new NorthHeading());
				rover.rotateRight();

				expect(rover.heading).toEqual(new EastHeading());
			});
		});
		
		describe("when a Rover is heading West", function() {
			it("should turn North", function() {
				var rover = new Rover(currentPosition, new WestHeading());
				rover.rotateRight();

				expect(rover.heading).toEqual(new NorthHeading());
			});
		});

		describe("when a Rover is heading South", function() {
			it("should turn West", function() {
				var rover = new Rover(currentPosition, new SouthHeading());
				rover.rotateRight();

				expect(rover.heading).toEqual(new WestHeading());
			});
		});

		describe("when a Rover is heading East", function() {
			it("should turn South", function() {
				var rover = new Rover(currentPosition, new EastHeading());
				rover.rotateRight();

				expect(rover.heading).toEqual(new SouthHeading());
			});
		});

	});


	describe("#moveForward", function() {

		beforeEach(function() {
			initialPosition = new Point(4,4);
		});

		describe("when a rover is heading North", function() {

			it("should increment Y position by one", function() {
				var rover = new Rover(initialPosition, new NorthHeading());
				rover.moveForward();
				expect(rover.currentPosition).toEqual(new Point(4,5));	
			});

		});

		describe("when a rover is heading South", function() {

			it("should decrement Y position by one", function() {
				var rover = new Rover(initialPosition, new SouthHeading());
				rover.moveForward();
				expect(rover.currentPosition).toEqual(new Point(4,3));	
			});

		});

		describe("when a rover is heading West", function() {

			it("should decrement X position by one", function() {
				var rover = new Rover(initialPosition, new WestHeading());
				rover.moveForward();
				expect(rover.currentPosition).toEqual(new Point(3,4));	
			});

		});

		describe("when a rover is heading East", function() {

			it("should increment X position by one", function() {
				var rover = new Rover(initialPosition, new EastHeading());
				rover.moveForward();
				expect(rover.currentPosition).toEqual(new Point(5,4));	
			});

		});

	});

	describe("#moveBackward", function() {

		beforeEach(function() {
			initialPosition = new Point(5,5);
		});

		describe("when a rover is heading North", function() {

			it("should decrement Y position by one", function() {
				var rover = new Rover(initialPosition, new NorthHeading());
				rover.moveBackward();
				expect(rover.currentPosition).toEqual(new Point(5,4));	
			});

		});

		describe("when a rover is heading South", function() {

			it("should increment Y position by one", function() {
				var rover = new Rover(initialPosition, new SouthHeading());
				rover.moveBackward();
				expect(rover.currentPosition).toEqual(new Point(5,6));	
			});

		});

		describe("when a rover is heading West", function() {

			it("should increment X position by one", function() {
				var rover = new Rover(initialPosition, new WestHeading());
				rover.moveBackward();
				expect(rover.currentPosition).toEqual(new Point(6,5));	
			});

		});

		describe("when a rover is heading East", function() {

			it("should decrement X position by one", function() {
				var rover = new Rover(initialPosition, new EastHeading());
				rover.moveBackward();
				expect(rover.currentPosition).toEqual(new Point(4,5));	
			});

		});
	});
});