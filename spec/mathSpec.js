var math = require('../src/math.js');

// describe(MANY COMPLEX PARAMETERS);
// describe("MY DESCRIPTION", MY_FUNCTION(MANY COMPLEX PARAMETERS);
describe(
//	My Description
	"test math functions",
//	My Funcion
	function() {

//		Testing ADD function
		it( "should add two and two and get four", function() {
			//sometimes some setup first
			expect(math.add(2,2)).toBe(4);
		});

//		Testing SUBTRACT function
		it( "should subtract five from nine and get four", function() {
			//sometimes some setup first
			expect(math.subtract(9,5)).toBe(4);
		});

//		Testing MULTIPLY function
		it( "should muliply two and two and get four", function() {
			//sometimes some setup first
			expect(math.multiply(2,2)).toBe(4);
		});

//		Testing DIVIDE function
		it( "should divide twelve by three and get four", function() {
			//sometimes some setup first
			expect(math.divide(12,3)).toBe(4);
		});

	}
);
