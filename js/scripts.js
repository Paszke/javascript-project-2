// plik scripts.js

function getTriangleArea(a, h) {
	if (a <= 0 & h <= 0) {
		console.log("nieprawidłowe dene");
	} else if (a > 0 & h > 0) {
		return a*h/2;
	}
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);