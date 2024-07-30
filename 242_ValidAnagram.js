let isAnagram = function(s, t) {
    // Check the length of both strings, if they are not equal, return false
    if (s.length !== t.length) {
        return false;
    }

    const charMap = new Map()
    //add to the hap, the characters of s and how many times they appear (a: 3, g: 5)
    for (let char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1)
    }
    // remove from the map, if the character exists
    for (let char of t) {
        // if char is not in the map, return false
        if (!charMap.has(char) || charMap.get(char) === 0 ) {
            return false;
        } 

        // if it exists, reduce the number of the character by 1 (a:2, g:4)
        charMap.set(char, charMap.get(char) - 1)
    }
    
    return true
};

 // Time Complexity: O(n)
 // Space Complexity: O(n)