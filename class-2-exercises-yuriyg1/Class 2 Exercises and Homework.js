//JS 310B
//HW #2
//Name: Yuriy Grinchenko
//Date:10/31/22

// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const person1 = {
  firstName: "Yuriy",
  lastName: "Grinchenko",
  favoriteFood: "Shawarma",
  bestFriend: {
      firstName: "Keri",
      lastName: "D",
      favoriteFood: "Sushi"
  }
};

// 2. console.log best friend's firstName and your favorite food

console.log(`Best friend's firstName: ${person1.bestFriend.firstName} and my favorite food: ${person1.favoriteFood}\n`);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let board = [['-', 'O', '-'], ['-', 'X', 'O'], ['X', '-', 'X']];

console.log(`TicTacToe Board: `)

printBoard = () => {
  for(let i=0;i<board[0].length;i++){
    console.log(board[i]);
  }
}
printBoard();
// 4. After the array is created, 'O' claims the top right square.
// Update that value.

board[0][2]='O';

// 5. Log the grid to the console.

console.log(`\nTop right square = O `);
printBoard();

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

let testEmail = 'foo@bar.baz';
const emailRegEx = /[\w!#$%^&*?+-]+@[\w!#$%^&*?+-]+\.[\w!#$%^&*?+-]+/gm; //I allowed crazy chars like #$ .. cuz idk if you wanted them or not, so I just included them
console.log(`\nEmail RegEx: ${emailRegEx.exec(testEmail)}`);

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
let assignmentTime = new Date(assignmentDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
assignmentTime.setDate(assignmentTime.getDate()+7);
console.log(`\nDue Date: ${assignmentTime}\n`);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

HTMLTimeTag =function(j) {
  return `<time datetime="YYYY-MM-DD">${months[j]} day, year</time>`;
}

let HTMLTimeTagsList = [];
for(let j =0; j<months.length; j++){
  HTMLTimeTagsList[j] = HTMLTimeTag(j);
}
//console.log(`New HTMLTimeTagsList: ${HTMLTimeTagsList[6]}\n`);

// 10. log this value using console.log

HTMLTimeTagPrint =function(months) {
  for(let k =0; k<months.length; k++){
    console.log(`<time datetime="2019-${k}-21">${months[k]} 21, 2019</time>`);
 }
}

HTMLTimeTagPrint(months);