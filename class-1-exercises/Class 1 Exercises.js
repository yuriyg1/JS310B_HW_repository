// JSCRIPT 310 B
// October 24, 2022
// Name: Yuriy Grinchenko
// HW #1

/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

let MedSize = 13;
let MedPrice = 16.99;
let LargeSize = 17;
let LargePrice = 19.99;

//Surface Area of circle = pi*r^2
SufaceAreaOfPizza = function(x){
    return Math.PI*Math.pow(x/2,2)
};

MedArea =SufaceAreaOfPizza(MedSize);
LargeArea =SufaceAreaOfPizza(LargeSize);

console.log(`Area of First Pizza: ${MedArea}, and Second Pizza: ${LargeArea} \n`);


// 2. What is the cost per square inch of each pizza?

CostPerSquareInch = function(price, area){
    return price/area
  };
  
  console.log(`Cost per square inch of First Pizza: ${CostPerSquareInch(MedPrice,MedArea)}, and Second Pizza: ${CostPerSquareInch(LargePrice,LargeArea)} \n`);
  

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

DrawRandomCard = function() {
    return Math.floor(Math.random()*13) +1 
  };
  
  console.log(`Draw Card: ${DrawRandomCard()}\n`);

// 4. Draw 3 cards and use Math to determine the highest
// card

p=DrawRandomCard();
q=DrawRandomCard();
r=DrawRandomCard();

console.log(`Highest card: ${Math.max(p,q,r)}\n`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = 'John';
let lastName = 'Doe';
let streetAddress = '123 4th st';
let city = 'Seattle'
let state = 'WA'
let zip = '98100'

console.log(`${firstName} ${lastName}
${streetAddress}
${city} ${state} ${zip}\n`);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

// ** Instead of counting letters (cuz not all names have the same amount of letters), I will isolate the first name and store it in a var when I hit a space in the string. **
let address = "firstName lastName streetAddress city, state zip";

const LengthOfFirstName = address.indexOf(" ");
console.log(`Extracted First Name: ${address.substring(0,LengthOfFirstName)}\n`)


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

//covert to millisec (1day = 24hr, 1hr = 60 min, 1min = 60 sec, 1 sec = 1000ms)
let startDate = new Date(2020, 1, 1);
let endDate = new Date(2020, 4, 1);

let timeDiffDays = (endDate - startDate)/(1000*60*60*24);
let midPoint = timeDiffDays/2;
startDate.setDate(startDate.getDate() + midPoint);

console.log(`Mid Date: ${startDate}`);
