// using hash map
let longestPalindrome = function(s) {
    let length = 0
    // create a map
    let map = new Map()
    // loop through every character in s
    for(let char of s){
    let n = 0 // number of times char occurs
    // if map has the character, do this
    if (map.has(char)) { 
        n = map.get(char)
        if(n % 2) length += 2 // checks if the char is an even number
    }
    // else add it to the map
    map.set(char, n+1)
    }
    return s.length > length ? length + 1 : length
};

// Time Complexity: 0(n)
// Space Complexity: 0(1)