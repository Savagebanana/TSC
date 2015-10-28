module.exports = require('./textures.js')

var svg = d3.select("#portfolio")
		.append("svg");

	var t = textures.lines()
		.thicker();

	svg.call(t);

	svg.append("portfolio")
  		.style("fill", t.url());

