//Objective is to see whether a value exist in a sorted 2-D array.

let matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]

let target = 20


//O(n^2) naive approach that iterates over every value to see if it exists.

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == target) {
            return true
        } 
    }
}

return false 


//O(logn) approach that performs a binary search on the matrix
let m = matrix.length 
let n = matrix[0].length

let start = 0
let end = m * n - 1

while (start < end) {
    let mid = Math.floor((start + end) / 2)
    let midElement = matrix[Math.floor(mid / n)][mid % n]

    if (midElement == target) {
        return true
    } else if (midElement > target) {
        high = mid - 1
    } else {
        low = mid + 1
    }
}

return false