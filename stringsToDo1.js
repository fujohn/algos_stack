// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks.
function removeBlanks(str) {
    return str.replaceAll(' ', '');
}

console.log('---------------- Remove Blanks ----------------');
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")) // => "PlayThatFunkyMusic"
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))// => "IcannotBELIEVEit'snotBUTTER"



// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
function getDigits(str) {
    let number = undefined;
    str.split('').forEach( element =>{
        if (!(isNaN(Number(element)))) {
            if (number === undefined) {
                number = 0;
            }
            number = (number * 10) + Number(element);
        }}
        )
    return number;
}

console.log('---------------- Get Digits ----------------');
console.log(getDigits("abc8c0d1ngd0j0!8")) // => 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")) // => 1357924680



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
function acronym(str) {
    let firstLetters = '';
    str.split(' ').forEach(word => {
        if (!(word.length < 1)) {
        firstLetters += word.toUpperCase()[0];
    }})
    return firstLetters;
}

console.log('---------------- Acronyms ----------------');
console.log(acronym(" there's no free lunch - gotta pay yer way. ")) // => "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!")) // => "LFNYISN"



// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
function countNonSpaces(str) {
    return str.length - (str.split(' ').length - 1);
    // total length - (number of words -1)
}

console.log('---------------- Count Non-Spaces ----------------');
console.log(countNonSpaces("Honey pie, you are driving me crazy")) // => 29
console.log(countNonSpaces("Hello world !")) // => 11



// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeShorterStrings(wordList, minLen) {
    let i = 0;
    while (i < wordList.length) {
        if (wordList[i].length < minLen) {
            wordList.splice(i,1);
        } else {
            i++;
        }
    }
    return wordList;
}

console.log('---------------- Remove Shorter Strings ----------------');
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)) // => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)) // => ['There', 'bug', 'the', 'system']
