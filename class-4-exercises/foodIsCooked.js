/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function(kind, internalTemp, doneness) {
  // Write function HERE
  switch (kind) {
    case 'chicken':
      return internalTemp>165 ? true : false
      break;
    case 'beef': switch (doneness) {
                case 'rare':
                  return internalTemp>125 ? true : false
                  break;
                case 'medium':
                  return internalTemp>135 ? true : false
                  break;   
                case 'well':
                  return internalTemp>155 ? true : false
                  break; 
                default:
                  return 'Doneness Error'
                  break;
                }
    break;
    default:
      return 'Meat Kind Error'
      break;
  }
}



// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true
console.log(foodIsCooked('beef', 138, 'rare')); // should be true