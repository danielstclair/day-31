angular.module('basic.services', [])

.factory('RandomArray', function() {
	return function(array) {
		var buttonChoice = Math.floor(Math.random() * array.length);
		return array[buttonChoice];
	}
})

.factory('Students', function() {
	var pair = function(array) {

		var Choice1 = Math.floor(Math.random() * array.length);

		var Choice2 = Math.floor(Math.random() * array.length);

			while(Choice1 === Choice2) {
				Choice1++;
			}

		var Array1 = array[Choice1];
		var Array2 = array[Choice2];
		
		return "The incredible " + Array1 + " with the amazing " + Array2
	}
	return pair;
})

.factory('dashIt', function() {
	var stringDash = function(string) {

	var stringed = string.replace(/ /g, "-");
	return stringed
	}
	return stringDash;
})