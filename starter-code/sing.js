console.log("sing.js loaded");

// for loop: starts with user input and subtracts 1 on the last line of each iteration

var numBottles = prompt("How many verses would you like to hear?");

for ( i = numBottles; i >= 1; i-- ) {
  if ( i === 1 ) {
    console.log (
    `1 bottle of beer on the wall,
    1 bottle of beer!
    Take one down and pass it around,
    No more bottles of beer on the wall!`
    )
  } else {
    console.log (
    `${i} bottles of beer on the wall,
    ${i} bottles of beer!
    Take one down and pass it around,
    ${i-1} bottles of beer on the wall!`
    )
  }
}
