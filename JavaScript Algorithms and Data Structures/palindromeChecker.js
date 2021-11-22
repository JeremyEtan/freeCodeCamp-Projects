function palindrome(str) {
    var newstr = str.replace(/[\W_]/g, '').toLowerCase();  
    return newstr === newstr.split('').reverse().join('');
}

console.log(palindrome("0_0 (: /-\ :) 0-0")); // should return true.
console.log(palindrome("My age is 0, 0 si ega ym.")); // should return true
console.log(palindrome("five|\_/|four")); // should return false