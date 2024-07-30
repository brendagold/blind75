// Using HashMap

let canConstruct = function(ransomNote, magazine) {
    let ransom = true

    const charMap = new Map()
    // add to the map, the characters of magazine and its count 
    for (let char of magazine) {
        charMap.set(char, (charMap.get(char) || 0) + 1)
    }

    // remove from the map, if character exists in ransomNote
    for (let char of ransomNote) {

        // if char is not in the map, return false
        if (!charMap.has(char) || charMap.get(char) === 0) {
            return false
        }

        // if it exists, reduce the number of the character in the map by 1
        charMap.set(char, charMap.get(char) - 1)
    }

    return true
};

// Time Complexity: O(n)
// Space Complexity: O(n)