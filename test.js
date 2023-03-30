// // Card Class... using it for the parameters to make the cards
// class Card{
//     constructor(value,suit){
//         this.suit = suit
//         this.value = value
//     }
// }
// // Deck Class that makes the cards


// class Deck{
//     constructor(){
//         this.cards = []
//         const suits= ['hearts' , 'diamonds' , 'clubs' , 'spades']
//         const values = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace']
       

//         for(let suit of suits){
//             for(let value of values){
//                 this.cards.push(new Card(value,suit))
//             }
//         }
       
//     }
   
// }

//////////////////////////////////
const king = 10
const queen = 10
const jack = 10
const ten = 10
const nine = 9
const eight = 8
const seven = 7
const six = 6
const five = 5
const four = 4
const three = 3
const two = 2
//ACE 
// if( total <=10){ //If total is 10 or less, aces are worth 11
// ace=11
// }else{           //if total is 11 or more, aces are worth 1
//     ace =1
// }
//Card Pictures
// let acePic = img.src("cards/ace.png")
// let kingPic = img.src("cards/king.png")
// let queenPic = img.src("cards/queen.png")
// let jackPic = img.src("cards/jack.png")
// let tenPic = img.src("cards/ten.png")
// let ninePic = img.src("cards/nine.png")
// let eightPic = img.src("cards/eight.png")
// let sevenPic = img.src("cards/seven.png")
// let sixPic = img.src("cards/six.png")
// let fivePic = img.src("cards/five.png")
// let fourPic = img.src("cards/four.png")
// let threePic = img.src("cards/three.png")
// let twoPic = img.src("cards/two.png")
///////////////////////////////////////


const cards=['king','queen','jack','ten','nine','eight','seven','six','five','four','three','two','ace']
const deck = []
for (let card of cards){
    for(let i=0; i<4; i++){
        deck.push(card)
    }
}

//Method that shuffles the deck (I run it multiple times inside this function for better shuffling )
function shuffleCards(){
deck.sort(()=>Math.random()-0.5)
deck.sort(()=>Math.random()-0.5)
deck.sort(()=>Math.random()-0.5)
console.log(deck)
}

shuffleCards(deck)
function dealPlayerCards(){
    let playersCards= [] //empty array where players cards will go
//loop to give 2 cards to player
for(let i=0; i<2;i++){
//method to remove the cards from the deck when they are added to players hand
const dealtPlayerCard= deck.shift()
playersCards.push(dealtPlayerCard)
}
return playersCards
}
const playerCards =  dealPlayerCards(deck)


//deals 1 face up to dealer and 1 face down.. not connected to dealer points yet
    // if player stands hidden card flips over and they're both added to dealer total
 function dealDealerCards(){
     let dealerCards = []//empty array where dealers cards will go
     //loop to give dealer 2 cards
     for(let i=0;i<2;i++){
      //method to remove the cards from the deck when they are added to dealers hand  
      const dealtDealerCard = deck.shift()
      dealerCards.push(dealtDealerCard)
     }
     dealerCards[0] = "hidden" //hides first dealer card 
     return dealerCards
}
const dealerCards = dealDealerCards(deck)

function playerHit(){ 
    const playerHit = deck.shift()
    playerCards.push(playerHit)
    console.log("Players Cards" , playerCards )
    }
    function clearTable(){
        dealerCards.length = 0
        playerCards.length=0
       }

//Experiment
function deal(){
console.log("Dealers Cards" , dealerCards)
console.log("Players Cards" , playerCards)
}
deal()
playerHit()
//playerHit()
clearTable()
//function to reveal dealers card when needed


