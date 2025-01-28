// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters
function asterisks(n) {
    return new Array(n).fill('*').join('');
}

console.log(asterisks(5), 'should equal *****');
console.log(asterisks(12), 'should equal ************');
console.log(asterisks(3), 'should equal ***');
// 5 => '*****'
// 12 => '************'
// 3 => "***"

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
