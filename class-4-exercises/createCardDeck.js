/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

 const getDeck = () => {
  const deck = []
  let suits = ['Clubs', 'Hearts', 'Spades', 'Diamonds'];

for(i=0;i<suits.length;i++){
  for(j=1;j<=13;j++){
      
      let displayVal = ''
      
      
      switch(true){
          case j === 1:
              displayVal = 'Ace'
              break
          case (j > 1 && j <= 10):
              displayVal = 'j'
              break
          case j === 11:
              displayVal = 'Jack'
              break
          case j === 12:
              displayVal = 'Queen'
              break
          case j === 13:
              displayVal = 'King'
              break
          default:
              displayVal = 'def'
              break
      }
      
      const card = {
          val: j,
          displayVal: displayVal,
          suit: suits[i]
      }
      deck.push(card)
  }
}
return deck
}

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];
console.log('Value of randomCard: ', typeof(randomCard))
const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);