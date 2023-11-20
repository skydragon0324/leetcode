/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
let called = false;
    // create closure by returning function that takes args
	return function (...args) {
        // check if fn is called, if false invert flag to access if body:
		if(!called) {     
            // set called to true to prevent further fn calls
            called = true;
            // return result of fb call
            return fn(...args);
        }
	};
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
