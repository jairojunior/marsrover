var Rover = function(currentPosition, heading) {
	this.currentPosition = currentPosition;
	this.heading = heading;
}

Rover.prototype.rotateLeft = function() {
	this.heading = this.heading.rotateLeft();
}

Rover.prototype.rotateRight = function() {
	this.heading = this.heading.rotateRight();
}

Rover.prototype.moveForward = function() {
	this.currentPosition = this.heading.forwardPointOf(this.currentPosition);
}

Rover.prototype.moveBackward = function() {
	this.currentPosition = this.heading.backwardPointOf(this.currentPosition);
}
