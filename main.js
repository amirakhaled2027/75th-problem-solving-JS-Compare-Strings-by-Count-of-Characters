//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function compareStr(str1, str2) {

    if(str1.length === str2.length) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(compareStr("AB", "CD"));
console.log(compareStr("ABC", "DE"));
console.log(compareStr("hello", "edabit"));