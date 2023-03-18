// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks.


console.log('Remove Blanks');
console.log(getDigits("abc8c0d1ngd0j0!8")) // => 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")) // => 1357924680


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().


console.log('Get Digits');
console.log(getDigits("abc8c0d1ngd0j0!8")) // => 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")) // => 1357924680


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().


console.log('Acronyms');
console.log(acronym(" there's no free lunch - gotta pay yer way. ")) // => "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!")) // => "LFNYISN"


// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 


console.log('Count Non-Spaces');
console.log(countNonSpaces("Honey pie, you are driving me crazy")) // => 29
console.log(countNonSpaces("Hello world !")) // => 11


// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.


console.log('Remove Shorter Strings');
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)) // => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)) // => ['There', 'bug', 'the', 'system']