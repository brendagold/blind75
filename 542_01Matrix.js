let  updateMatrix = function(mat) {
    let directions = [[0, -1], [0, 1], [1, 0], [-1, 0]] // [x, y] cordinates  
    let queue = []
  
    // iterate through the matrix and add to the queue if the value is 0
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat.length; j++) {
          if (mat[i][j] === 0){
              queue.push([i,j,0])
          } else {
              mat[i][j] = Infinity
          }
      }
    }
  
    // Using Breadth-first Search
    while (queue.length) {
      let [currentX, currentY, distance] = queue.shift()
  
      if(mat[currentX][currentY] > distance) {
          mat[currentX][currentY] = distance
      }
    
      for(let [x, y] of directions) {
          let [nextX, nextY, nextVal] = [currentX+x, currentY+y, distance+1]
  
          if(nextX < 0 || nextX > mat.length-1 || nextY < 0 || nextY > mat[0].length - 1) continue;
  
          if(mat[nextX][nextY] === Infinity){
              queue.push([nextX, nextY, nextVal])
          }
      }
    }
  
    return mat
  };

// Time Complexity: O(n^2)
// Space Complexity: O(n) 