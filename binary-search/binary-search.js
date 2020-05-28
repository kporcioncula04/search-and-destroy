'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	const targetFound =  array.filter( elem => {
		return target === elem
	})

	if(targetFound.length) return true
	else return false

	// let middleIdx = Math.floor(array.length / 2)
	// let min = 0
	// let max = array.length - 1

	// if(array[middleIdx] === target) {
	// 	return true
	// } else if(array[middleIdx] < target){
	// 		min = middleIdx + 1
	// } else if(array[middleIdx] > target){
	// 		max = middleIdx - 1
	// } else{
	// 	return false
	// }

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
