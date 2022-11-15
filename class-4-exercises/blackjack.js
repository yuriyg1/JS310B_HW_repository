
const blackjackDeck = [
  { val: 2, displayVal: '2', suit: 'hearts' },
  { val: 3, displayVal: '3', suit: 'hearts' },
  { val: 4, displayVal: '4', suit: 'hearts' },
  { val: 5, displayVal: '5', suit: 'hearts' },
  { val: 6, displayVal: '6', suit: 'hearts' },
  { val: 7, displayVal: '7', suit: 'hearts' },
  { val: 8, displayVal: '8', suit: 'hearts' },
  { val: 9, displayVal: '9', suit: 'hearts' },
  { val: 10, displayVal: '10', suit: 'hearts' },
  { val: 10, displayVal: 'Jack', suit: 'hearts' },
  { val: 10, displayVal: 'Queen', suit: 'hearts' },
  { val: 10, displayVal: 'King', suit: 'hearts' },
  { val: 11, displayVal: 'Ace', suit: 'hearts' },
  { val: 2, displayVal: '2', suit: 'diamonds' },
  { val: 3, displayVal: '3', suit: 'diamonds' },
  { val: 4, displayVal: '4', suit: 'diamonds' },
  { val: 5, displayVal: '5', suit: 'diamonds' },
  { val: 6, displayVal: '6', suit: 'diamonds' },
  { val: 7, displayVal: '7', suit: 'diamonds' },
  { val: 8, displayVal: '8', suit: 'diamonds' },
  { val: 9, displayVal: '9', suit: 'diamonds' },
  { val: 10, displayVal: '10', suit: 'diamonds' },
  { val: 10, displayVal: 'Jack', suit: 'diamonds' },
  { val: 10, displayVal: 'Queen', suit: 'diamonds' },
  { val: 10, displayVal: 'King', suit: 'diamonds' },
  { val: 11, displayVal: 'Ace', suit: 'diamonds' },
  { val: 2, displayVal: '2', suit: 'clubs' },
  { val: 3, displayVal: '3', suit: 'clubs' },
  { val: 4, displayVal: '4', suit: 'clubs' },
  { val: 5, displayVal: '5', suit: 'clubs' },
  { val: 6, displayVal: '6', suit: 'clubs' },
  { val: 7, displayVal: '7', suit: 'clubs' },
  { val: 8, displayVal: '8', suit: 'clubs' },
  { val: 9, displayVal: '9', suit: 'clubs' },
  { val: 10, displayVal: '10', suit: 'clubs' },
  { val: 10, displayVal: 'Jack', suit: 'clubs' },
  { val: 10, displayVal: 'Queen', suit: 'clubs' },
  { val: 10, displayVal: 'King', suit: 'clubs' },
  { val: 11, displayVal: 'Ace', suit: 'clubs' },
  { val: 2, displayVal: '2', suit: 'spades' },
  { val: 3, displayVal: '3', suit: 'spades' },
  { val: 4, displayVal: '4', suit: 'spades' },
  { val: 5, displayVal: '5', suit: 'spades' },
  { val: 6, displayVal: '6', suit: 'spades' },
  { val: 7, displayVal: '7', suit: 'spades' },
  { val: 8, displayVal: '8', suit: 'spades' },
  { val: 9, displayVal: '9', suit: 'spades' },
  { val: 10, displayVal: '10', suit: 'spades' },
  { val: 10, displayVal: 'Jack', suit: 'spades' },
  { val: 10, displayVal: 'Queen', suit: 'spades' },
  { val: 10, displayVal: 'King', suit: 'spades' },
  { val: 11, displayVal: 'Ace', suit: 'spades' }
];

/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
 class CardPlayer {
  constructor(name){
    this.name = name,
    this.hand = new Array
  }
  drawCard(){
    let draw = Math.floor(Math.random()*blackjackDeck.length) // randomly draw card from deck
    // console.log(`${this.name}:${blackjackDeck[draw].val}`)
    this.hand.push(blackjackDeck[draw]) //Add randomly drawn card to this person's hand
    blackjackDeck.splice(draw,1) //Remove randomly drawn card from main deck
  }
}; 
//console.log(`Player:${player.hand[1].val}, Dealer:${dealer}`)

// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('Dealer'); // TODO
const player = new CardPlayer('Player'); // TODO

/**
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft
 */
 const calcPoints = (hand, total = 0, isSoft = false) => {

  hand.forEach(element => {
      total+=element.val
      if(element.displayVal == 'Ace' && element.val == 11){
          isSoft = true
      }
  })
    if(isSoft && total >21){
        total-=10
    }
  var obj = {
      total: total,
      isSoft: isSoft,
  }
  return obj
}

checkBlackJackHand = function(){
    let dealerStats = calcPoints(dealer.hand)
    if(dealerStats.isSoft && dealerStats.total ==21){
        console.log('Dealer has a Blackjack!')
        document.write('Dealer has a Blackjack!')
        return true
    }
    playerStats = calcPoints(player.hand)
    if(playerStats.isSoft && playerStats.total ==21){
        console.log('Player has a Blackjack!')
        document.write('Player has a Blackjack!')
        return true
    }
}
/**
 * Determines whether the dealer should draw another card.
 * 
 * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
 * @returns {boolean} whether dealer should draw another card
 */
const dealerShouldDraw = (dealerHand) => {
  if(calcPoints(dealer.hand).total < 17){
      return true
  }
  else if(calcPoints(dealer.hand).total == 17 && calcPoints(dealer.hand).isSoft)
      return true
  else
      return false
}

/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
  // CREATE FUNCTION HERE
  if(playerScore>dealerScore){
      return `Player beats Dealer, ${playerScore} to ${dealerScore}`}
  else if(playerScore===dealerScore){
      return `Player ties Dealer, ${playerScore} to ${dealerScore}`}
  else {
      return `Dealer beats Player, ${dealerScore} to ${playerScore}`}
}

/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

/**
 * Logs the player's hand to the console
 * @param {CardPlayer} player 
 */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

/**
 * Runs Blackjack Game
 */
const startGame = function() {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  if(checkBlackJackHand()){
      return ''
  }
  
  let playerScore = calcPoints(player.hand).total;

   while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
   }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return 'Dealer went over 21 - you win!';
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
}
const game = startGame()
console.log(game);
document.write(game);