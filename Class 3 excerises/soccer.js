
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

getTotalPoints = function(scoreString){
  scoreIndex = scoreString.split('')
  this.Score = 0;
  scoreIndex.forEach(element => {
    switch(element) {
      case 'W':case 'w':
        this.Score += 3;
        break;
      case 'L':case 'l':
        this.Score += 0;
        break;
      case 'D':case 'd':
        this.Score += 1;
        break;
      default:
        break;
  }
  });
  return `${this.Score}`
}

// Check getTotalPoints
console.log(`Calculated Score:`);
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

orderTeams = function(...anything){
  anything.forEach(element => console.log(`${element.name}: ${getTotalPoints(element.results) }`))

}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4

//Wrap everything in an IIFE to keep the variables out of the global scope
(function(scoreString){
  scoreIndex = scoreString.split('')
  this.Score = 0;
  scoreIndex.forEach(element => {
    switch(element) {
      case 'W':case 'w':
        this.Score += 3;
        break;
      case 'L':case 'l':
        this.Score += 0;
        break;
      case 'D':case 'd':
        this.Score += 1;
        break;
      default:
        break;
  }
  });
  console.log(`IIFE Score: ${this.Score}`);
})('wwdl');