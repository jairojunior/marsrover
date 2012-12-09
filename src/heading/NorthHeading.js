function NorthHeading () {
	var name = "North";
}

NorthHeading.prototype.rotateLeft = function() {
	return new WestHeading();
}

NorthHeading.prototype.rotateRight = function() {
	return new EastHeading();
}

NorthHeading.prototype.forwardPointOf = function(point) {
	return new Point(point.x, point.y+1);
}

NorthHeading.prototype.backwardPointOf = function(point) {
	return new Point(point.x, point.y-1);
}