var isValid = function (str) {
    // Define a hash table (Key: Value) Pairs
    const parenthesesMap = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    // Define an empty array to store opening parentheses
    const openParentheses = [];
  
    // Loop over each character in the input
    for (const s of str) {
      // If the parentheses is an opening parentheses, push it onto the openParentheses array
      if (s in parenthesesMap) {
        openParentheses.push(s);
      } 
      // If the parentheses is a closing parentheses
      // check if it matches the most recent opening parentheses in the openParentheses array
      // and return false if it does not match or the openParentheses array is empty
      else if (parenthesesMap[openParentheses.pop()] !== s) {
        return false;
      }
    }
  
    // If the openParentheses array is empty, return true 
    // Otherwise, return false 
    return openParentheses.length === 0;
  };

// Time Complexity: O(n)
// Space Complexity: O(n)  