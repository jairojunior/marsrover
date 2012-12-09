function EastHeading () {
	var name = "East";
}

EastHeading.prototype.rotateLeft = function() {
	return new NorthHeading();
}

EastHeading.prototype.rotateRight = function() {
	return new SouthHeading();
}

EastHeading.prototype.forwardPointOf = function(point) {
	return new Point(point.x+1, point.y);
}

EastHeading.prototype.backwardPointOf = function(point) {
	return new Point(point.x-1, point.y);
}