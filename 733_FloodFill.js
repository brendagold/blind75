var floodFill = function(image, sr, sc, newColor) {
    // create a variable to store the starting color
    // this variable will help us keep track of which pixels have been visited
    let startColor = image[sr][sc];
    
    // recursion condition
    if (startColor == newColor) return image
    // create a helper function that takes in the current row, column, and color
    // this function will recursively call itself on any adjacent pixels with the same color
    function fill(row, column, color) {
        // if the row or column is out of bounds, or the current pixel is a different color, return
        if (row < 0 || row >= image.length || column < 0 || column >= image[0].length || image[row][column] !== color) {
            return;
        }
        // set the current pixel's color to the new color
        image[row][column] = newColor;
        // recursively call fill on the pixel above
        fill(row - 1, column, color);
        // recursively call fill on the pixel below
        fill(row + 1, column, color);
        // recursively call fill on the pixel to the right
        fill(row, column + 1, color);
        // recursively call fill on the pixel to the left
        fill(row, column - 1, color);
    }
    
    // call the helper function
    fill(sr, sc, startColor);
    
    // return the updated image
    return image;
};

// Time Complexity: O(m * n)
// Space Complexity: O(m * n)