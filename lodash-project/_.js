
const _ = {
    clamp(num, lowerBound, upperBound) {
        if (typeof (num) !== 'number') { console.log('Please enter a number.'); } // check all 3 entries are numbers
        else if (num >= lowerBound && num <= upperBound) { return num; }  // return num if >= lowerBound and <=upperBound
        else if (num < lowerBound) { return lowerBound; }  // if num < lowerBound, return lowerBound
        else if (num > upperBound) { return upperBound; }  // if num > upperBound, return upperBound
    },
    inRange(num, startVal, endVal) {
        if (startVal > endVal) { [startVal, endVal] = [endVal, startVal]; } // if startVal > endVal, swaps startVal and endVap
        if (!endVal) { endVal = startVal, startVal = 0; } // if no endVal (ie, endVal is falsy), startVal = 0 and endVal = startVal
        return (num >= startVal && num < endVal);  // return true if num is >startVal and < endVal, else return false
    },
    words(string) {
        wordArray = string.split(' '); // split at each space (' ') to array
        return (wordArray);
    },
    pad(string, targetLength, char) {
        // add padding (empty spaces ' ') evenly to each side of string to make up final length
        if (!char) { char = ' ' }; // if no character to pad with added, defaults to empty space (' ')
        inputLength = string.length;
        totalPaddingToAdd = targetLength - inputLength; // calculate total padding to add
        paddingToAdd = totalPaddingToAdd / 2; // calculate padding to add to each side
        if (inputLength >= targetLength || targetLength < 0) { return `Cannot add padding as target length too short.`; } // check  adding length is possible
        else if (paddingToAdd % 2 === 0) // check even number
        {
            stringToAdd = char.repeat(paddingToAdd);
            return (`${stringToAdd}${string}${stringToAdd}`);
        }
        else if (paddingToAdd % 2 !== 0) // check if odd number
        {
            leftPaddingToAdd = char.repeat(Math.floor(paddingToAdd)); // round down so string length is correct
            rightPaddingToAdd = char.repeat(Math.ceil(paddingToAdd)); // round up to add extra padding to right of string
            return (`${leftPaddingToAdd}${string}${rightPaddingToAdd}`)
        };
    },
    has(object, key) {
        // check whether provided object contains a value at specified key
        if (object[key]) { return true }
        else { return false }
    },
    invert(object) {
        // iterate through each key:value pair
        // swap key and value
        // if duplicates, subsequent values overwrite original values
        const swapped = Object.entries(object).  // Object.entries returns key:value pairs as array.
            map(([key, value]) => [value, key]); // .map returns an array after swapping. note .map defines a function and ([key, value]) defines key and value
        const swappedObject = Object.fromEntries(swapped); // creates entry from swapped array
        return (swappedObject);
    },
    findKey(object, predicate) {
        // iterate key, val pair and call predicate on value
        // return first key that has truthy value
        // return undefined if no values truthy
        let entries = Object.entries(object);
        for (item of entries) { if (predicate(item[1])) { return item[0] } };

    },
    drop(array, number) {
        if (!number) { return array.slice(1) } // if no number specified, return array with first digit dropped from start
        else { return array.slice(number) } // return new array excluding specified number of items from start
    },
    dropWhile(array, predicate) {
        // copy array, dropping elements from beginning until an element causes predicate to return falsy
        // tutorial calls .findIndex() and _.drop()
        let arrayToTrim = array;
        do {
            arrayToTrim = arrayToTrim.slice(1)
        }
        while (predicate(arrayToTrim[0], 0))
        return arrayToTrim;
    },
    chunk(array, size) {
        // break array into chunks of specified size
        // return array of all array chnuks, in order
        // if array cannot be broken evenly, last chunk is smaller
        // if no size given, size set to 1
        let chunkArray = [];
        for (let i = 0; i < array.length; i += size) {
            end = i + size;
            chunkArray.push(array.slice(i, end));
        }
        return chunkArray;
    }
};


/* // .clamp() tests
console.log(_.clamp(7, 21, 25) === 21); // if 21, prints true
console.log(_.clamp(10, 5, 15) === 10); // if 10, prints true
console.log(_.clamp(18, 9, 14) === 14); // if 14, prints true
 */
//.inRange() tests
/* console.log(_.inRange(4, 3, 5)); // true
console.log(_.inRange(3, 7)); // true
console.log(_.inRange(5, 3)); // false
console.log(_.inRange(-4, -1, -6)); // true */

//.split() tests
/* console.log(_.words("I need a sentence to split."));
console.log(_.words("This-shouldn't,split.as'thereare_noSpaces"));
 */

//.pad tests
/* console.log(_.pad('beep', -2, '?'));
console.log(_.pad('beep', 8, '?'));
console.log(_.pad('beep', 7, '?'));
console.log(_.pad('beep', 0, '?'));
console.log(_.pad('beep', 10));
console.log(_.pad('beep', 14, '.'));
 */

/* // .has tests
const object1 = {
    a: 'something',
    b: NaN,
    c: false,
    d: 0,
    e: '',
  };

  console.log(_.has(object1, 'a'));
  console.log(_.has(object1, 'b'));
  console.log(_.has(object1, 'c'));
  console.log(_.has(object1, 'd'));
  console.log(_.has(object1, 'e'));
  console.log(_.has(object1, 'f')); */

/*   // invert tests
let object1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4}; 
let object2 = {'a': 1, 'b': 2, 'c': 3, 'd': 1};
console.log((object1));
console.log(_.invert(object1));
console.log((object2));
console.log(_.invert(object2)); */


/* // findKey tests
let users = {
    'Batman':  { 'vehicle': 'Batmobile', 'hero': true },
    'Robin':    { 'vehicle': 'Redbird', 'hero': true },
    'Joker': { 'vehicle': 'Jokermobile',  'hero': false } // changed to true to test return undefined
  };
   
let predicate = function(person) { return person.hero === false; }
 
console.log(_.findKey(users, predicate));
  // => 'Joker' */

/* // drop tests
console.log(_.drop([2, 3, 4]));
// => [3, 4]
 
console.log(_.drop([1, 2, 3], 1));
// => [2, 3]
 
console.log(_.drop([1, 2, 3], 7));
// => []
 
console.log(_.drop([0, 1, 2, 3], 0));
// => [0, 1, 2, 3] */


/* // dropWhile tests
const testArray = [2, 4, 6, 3, 7];
const predicate = (e) => {
  return e != 6;
} 

// Predicate function returns `false` at `6`. New array will be that element and all subsequent elements
console.log(_.dropWhile(testArray, predicate)); // [6, 3, 7];
// actual test
let test = [1, 2, 0, 4];
const indexIsSmallerThanElement = (element, index) => index < element;
console.log(_.dropWhile(test, indexIsSmallerThanElement)); */

/* // chunk tests 
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], [‘c’, 'd']]
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', ‘c’], ['d']]
 */


// Do not write or modify code below this line.
module.exports = _;