function SouthHeading () {
	var name = "South";
}

SouthHeading.prototype.rotateLeft = function() {
	return new EastHeading();
}

SouthHeading.prototype.rotateRight = function() {
	return new WestHeading();
}

SouthHeading.prototype.forwardPointOf = function(point) {
	return new Point(point.x, point.y-1);
}

SouthHeading.prototype.backwardPointOf = function(point) {
	return new Point(point.x, point.y+1);
}