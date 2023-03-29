
////////////////////////////////////////////////////////////////////////////////////////////////     



////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////

//Method that creates the deck
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

///////////////////////////////////////////////////////////////////////////////////////////
//total points
//playerTotalPoints = 
//document.getElementById("totalPlayerPoints").textContent = playerTotalPoints

//////////////////////////////////////////////////////////////////////////////////////////
//Function to deal 2 cards to player face up 
    //deals 2 cards to player and adds total to player points (in progress)
let playersCards = []
let dealersCards = []
    function dealPlayerCards(){
    let playersCards=[] //empty array where players cards will go
//loop to give 2 cards to player
for(let i=0; i<2;i++){
//method to remove the cards from the deck when they are added to players hand
const dealtPlayerCard= deck.shift()
playersCards.push(dealtPlayerCard)
}
return playersCards
}
const playerCards =  dealPlayerCards(deck)// can now use "playerCards" anytime i need to deal 2 cards to player

/////////////////////////////////////////////////////////////////////////////////////////

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

//NEED REVEAL CARD FUNCTION

//////////////////////////////////////////////////////////////////////////////////////////
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
   function playerHit(){ 
    const playerHit = deck.shift()
    playerCards.push(playerHit)
    }
    hitBtn.addEventListener("click", playerHit())
//STAND BUTTON
    //stand button stops player from taking cards... lets dealer have the option to hit or stand
    const standBtn = document.getElementById("stand")
//NEW HAND BUTTON   
    //new hand button clears the board and deals the player 2 face up cards and dealer 1 face up 1 face down
   function newHand(){
    playersCards = []
    dealersCards = []
    shuffleCards(deck)
    console.log("Players Cards" , playerCards)
    console.log("Dealers Cards" , dealerCards)

   }
    const newHandBtn = document.getElementById("newHand")
    newHandBtn.addEventListener("click",newHand)
    
//scoreboard 
    //when player wins add 1 to player
    //when dealer wins add 1 to dealer

//function that displays whatever cards the player is dealt
    // function displayPlayerCards(card){
    //     let img = document.createElement("")
    // }
        
    



