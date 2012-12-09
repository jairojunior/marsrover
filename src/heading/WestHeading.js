function WestHeading () {
	var name = "West";
}

WestHeading.prototype.rotateLeft = function() {
	return new SouthHeading();
}

WestHeading.prototype.rotateRight = function() {
	return new NorthHeading();
}

WestHeading.prototype.forwardPointOf = function(point) {
	return new Point(point.x-1, point.y);
}

WestHeading.prototype.backwardPointOf = function(point) {
	return new Point(point.x+1, point.y);
}