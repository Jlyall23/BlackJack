// Card Class
class Card{
    constructor(value,suit){
        this.suit = suit
        this.value = value
    }
}
// Deck Class that makes the cards


class Deck{
    constructor(){
        this.cards = []
        const suits= ['hearts' , 'diamonds' , 'clubs' , 'spades']
        const values = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace']
       

        for(let suit of suits){
            for(let value of values){
                this.cards.push(new Card(value,suit))
            }
        }
       
    }
   
}
        //Shuffle Function 
        
//         shuffle(){
//             for(let i=this.cards.length-1; i >0; i--){
//                 const j = Math.floor(Math.random()* (i+1))
//             [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
//                 }
//             }
// }




//Card values
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

//Shuffle Function  NOT WORKING
function shuffleDeck(deck){
    for(let i=deck.length-1; i >0; i--){
        const j = Math.floor(Math.random()* (i+1))
    [deck[i], deck[j]] = [deck[j], deck[i]]
        }
    }
//Shuffle Function uses
    // made a value I can use to create a new deck
   // const newDeck = new Deck()
  //  //console.log(newDeck) //shows unshuffled cards
  //  shuffleDeck(newDeck) //shuffles the deck
 //   console.log(newDeck) //shows shuffled cards

//total points

//Function to deal 2 cards to player face up and two to dealer with one face down
    //deals 2 cards to player and adds total to player points
    //deals 1 face up to dealer and 1 face down.. not connected to dealer points yet
    // if player stands hidden card flips over and they're both added to dealer total

//if  statements for busts
    //if player total is >=22... log bust and increase dealer score by 1
    //if dealer total is >=22... log bust and increase player score by 1

//if else statements for blackjack
    // if player and dealers first 2 cards are AK AQ AJ A10.. log push
    //else if players first 2 cards are AK AQ AJ A10... log BLACKJACK! and increase player score by 1
    //else if dealer first 2 cards are AK AQ AJ A10... log BLACKJACK! and increase player score by 1
    //else continue game as normal
 
//if else statements for when the dealer must hit or stay
    // if dealer total >= 17 they must stand
    //else they must hit until >=17

//hit stand new game methods hooked to html buttons
    
//HIT BUTTON
    //hit button gives player new card... adds its value to total
    const hitBtn = document.getElementById("hit")
//STAND BUTTON
    //stand button stops player from taking cards... lets dealer have the option to hit or stand
    const standBtn = document.getElementById("stand")
//NEW HAND BUTTON   
    //new hand button clears the board and deals the player 2 face up cards and dealer 1 face up 1 face down
    const newHandBtn = document.getElementById("newHand")
    newHandBtn.addEventListener("click",function(){
        let card1 = newDeck[Math.floor(Math.random()*newDeck.length)]
        let card2 = newDeck[Math.floor(Math.random()*newDeck.length)]
    })

//scoreboard 
    //when player wins add 1 to player
    //when dealer wins add 1 to dealer

// function that displays whatever cards the player is dealt
    function displayPlayerCards(card){
        let img = document.createElement("")
        let ace = img.src("cards/ace.png")
        let king = img.src("cards/king.png)
    }

displayPlayerCards(ace)

