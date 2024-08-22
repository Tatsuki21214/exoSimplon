// Exo 1
let hashtag = "#";

while (hashtag.length <=7 ){
  console.log(hashtag);
  hashtag += "#";
}

// Exo 2
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Exo 3
let rows = 8;
let cols = 8;
let board = [];

let h = "#"

for (let i = 0; i < rows; i++) {
    board[i] = [];  // Crée une nouvelle ligne
    if (rows % 2 == 0 && cols % 2 == 0) {
        for (let j = 0; j < cols; j++) {
            board[i][j] = h;
            if (h === "#") {
                h = " ";
            }else {
                h = "#";
            }
        }
        if (h === " ") {
            h = "#";
        }else {
            h = " ";
        }
    }
    else {
        for (let j = 0; j < cols; j++) {
            board[i][j] = h;
            if (h === "#") {
                h = " ";
            }else {
                h = "#";
            }
        }
    }
}

console.log(board);

// Exo 4
function min(a , b) {
    if (a < b) {
    return a
  }else {
    return b
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Exo 5
function isEven(a) {
    if ( ){
        
    }
}

console.log(isEven(50));
// True
console.log(isEven(75));
// True



