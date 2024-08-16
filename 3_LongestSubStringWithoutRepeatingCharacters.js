// Using sliding Window

let lengthOfLongestSubstring = function(s) {
    let longestSubString = 0

    let letterSet = new Set()

    // create the sliding window
    let left = 0
    let right = 0

    while (right < s.length) {
        let letter = s[right]

        if (!letterSet.has(letter)) { // if letter doesn't exist in set
            letterSet.add(letter) // add it
            longestSubString = Math.max(longestSubString, letterSet.size) 
            right++
        } else {
            letterSet.delete(s[left]) // remove letters before the duplicate and the duplicate letter
            left++
        }
    }
    return longestSubString
};

// Time Complexity: O(n)
// Space Complexity: O(n)