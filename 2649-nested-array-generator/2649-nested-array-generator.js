/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
   const stack = [arr];

	while(stack.length > 0){

		current_array = stack.pop();

		if(Array.isArray(current_array) == false){
			yield current_array;
			continue;
		}

		for(let index = current_array.length - 1 ; index >= 0 ; index--){
			stack.push(current_array[index]);
		}
	}
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */