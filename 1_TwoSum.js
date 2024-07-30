 // Using hash maps (key: value pairs)

let twoSum = function(nums, target) {
    let sumMap = {} //the hashmap
    for (let i = 0; i <= nums.length; i++) { //this for loop interates through the array
        if (sumMap[target - nums[i]] != undefined) { //check if number is valid
            return [sumMap[target - nums[i]], i]; //returns an array of the indexes if the diff exist
        } else {
            sumMap[nums[i]] = i //adds the number and its index to the hash map
        }
    }
    return []
};

// Time Complexity: O(n)
// Space Complexity: O(n)