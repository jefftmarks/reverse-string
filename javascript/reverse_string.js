// turn string into array of characters
// iterate through string, add previous character after current  haracter

function reverseString(str) {
  const arr = str.split("");
	let result = "";
	for (const char of arr) {
		result = char + result;
	}
	return result;
}

// function reverseString(str) {
// 	const arr = str.split("");
// 	const result = arr.reduce((total, curr) => {
// 		return curr + total;
// 	}, "")
// 	return result;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
