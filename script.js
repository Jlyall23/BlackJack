
////////////////////////////////////////////////////////////////////////////////////////////////////////////////     



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array holding the deck of 52 cards

const deck =['2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC','2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD','2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH','2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS']

//Key value pairs designating the value of each card

const cardValue =  {'2C':2,'3C':3,'4C':4,'5C':5,'6C':6,'7C':7,'8C':8,'9C':9,'10C':10,'JC':10,'QC':10,'KC':10,'AC':[1, 11],'2D':2,'3D':3,'4D':4,'5D':5,'6D':6,'7D':7,'8D':8,'9D':9,'10D':10,'JD':10,'QD':10,'KD':10,'AD':[1, 11],'2H':2,'3H':3,'4H':4,'5H':5,'6H':6,'7H':7,'8H':8,'9H':9,'10H':10,'JH':10,'QH':10,'KH':10,'AH':[1, 11],'2S':2,'3S':3,'4S':4,'5S':5,'6S':6,'7S':7,'8S':8,'9S':9,'10S':10,'JS':10,'QS':10,'KS':10,'AS':[1, 11]}

//Method that shuffles the deck (I run it multiple times inside this function for better shuffling )

function shuffleCards(){
    deck.sort(()=>Math.random()-0.5)
    deck.sort(()=>Math.random()-0.5)
    deck.sort(()=>Math.random()-0.5)
    console.log(deck)
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function to deal 2 cards to player face up 
//deals 2 cards to player and adds total to player points (in progress)
shuffleCards(deck)
function dealPlayerCards(){
    let playersCards=[] //empty array where players cards will go
    //loop to give 2 cards to player
    for(let i=0; i<2;i++){
        //method to remove the cards from the deck when they are added to players hand
        console.log(deck)
        
        const dealtPlayerCard= deck.shift()
        playersCards.push(dealtPlayerCard)
    }
    return playersCards
}
const playerCards =  dealPlayerCards(deck)



//deals 2 cards to dealer

function dealDealerCards(){
    let dealerCards = []//empty array where dealers cards will go
    //loop to give dealer 2 cards
    for(let i=0;i<2;i++){
        //method to remove the cards from the deck when they are added to dealers hand  
        const dealtDealerCard = deck.shift()
        dealerCards.push(dealtDealerCard)
    }
    //dealerCards[0] = "hidden" //hides first dealer card 
    return dealerCards
}
const dealerCards = dealDealerCards(deck)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// If else statements for Ace value.... If total points are 10 or less then Ace=11 else Ace=1

// if(playerCards[i]=== cardValue.AC || playerCards[i]=== cardValue.AS || playerCards[i]=== cardValue.AD|| playerCards[i]=== cardValue.AD && playerTotalPoints <=10){
//     cardValue.AC
//     cardValue.AS
//     cardValue.AD
//     cardValue.AH
    
// }else if(playerCards[i]=== cardValue.AC || playerCards[i]=== cardValue.AS || playerCards[i]=== cardValue.AD|| playerCards[i]=== cardValue.AD && playerTotalPoints >=11){
//     cardValue.AC
//     cardValue.AS
//     cardValue.AD
//     cardValue.AH
// }
// ////////Same thing, but for the dealer
// if(dealerCards[i]=== cardValue.AC || dealerCards[i]=== cardValue.AS || dealerCards[i]=== cardValue.AD|| dealerCards[i]=== cardValue.AD && dealerTotalPoints <=10){
//     cardValue.AC
//     cardValue.AS
//     cardValue.AD
//     cardValue.AH
    
// }else if(dealerCards[i]=== cardValue.AC || dealerCards[i]=== cardValue.AS || dealerCards[i]=== cardValue.AD|| dealerCards[i]=== cardValue.AD && dealerTotalPoints >=11){
//     cardValue.AC
//     cardValue.AS
//     cardValue.AD
//     cardValue.AH
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////Function to add the value of each player card to get the total points
    function playerTotalPoints(){
         for(let i=0; i<playerCards.length; i++){
           // let playerTotal
            //   playerTotal += cardValue[`${playerCards[i]}`]
             const playerTotal = cardValue[`${playerCards[0]}`] + cardValue[`${playerCards[1]}`]
            console.log("Player Total" , playerTotal)
    }
    }
    //Function to add the value of each dealer card to get the total points
    function dealerTotalPoints(){
        for(let i=0; i<dealerCards.length; i++){
           //let dealerTotal
               //dealerTotal += cardValue[`${dealerCards[i]}`]
            const dealerTotal = cardValue[`${dealerCards[0]}`] + cardValue[`${dealerCards[1]}`]
           console.log("Dealer Total" , dealerTotal)
    }
    }
    playerTotalPoints()
    dealerTotalPoints()
    
        //NEED REVEAL CARD FUNCTION
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
//if  statements for busts
       
        
        if(playerTotalPoints >=22){
            console.log("BUST")
        }
           
        if(dealerTotalPoints >=22){
                console.log("BUST")
            }
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////           
            
            //if else statements for blackjack
            
            // if player and dealers first 2 cards are AK AQ AJ A10.. log push
            if(cardValue[`${playerCards[0]}`] + cardValue[`${playerCards[1]}`]===21 && 
       cardValue[`${dealerCards[0]}`] + cardValue[`${dealerCards[1]}`]===21){
        console.log("Push")
    }
    
    //else if players first 2 cards are AK AQ AJ A10... log BLACKJACK! and increase player score by 1
    else if(cardValue[`${playerCards[0]}`] + cardValue[`${playerCards[1]}`]===21){
        console.log("BlackJack!!!!")
    }
    
    //else if dealer first 2 cards are AK AQ AJ A10... log BLACKJACK! and increase dealer score by 1
    else if(cardValue[`${dealerCards[0]}`] + cardValue[`${dealerCards[1]}`]===21){
        console.log("Dealer has BlackJack")
    }
    
    //else continue game as normal
    else{
        console.log("Nobody has Blackjack... Carry on")
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   

//if else statements for when the dealer must hit or stay
    if(dealerTotalPoints <17){
        dealerHit()
        console.log("Dealer Points" , dealerTotal)
    }else{
        //dealerStand
        console.log("yo")
    }
   // if dealer total >= 17 they must stand
   // else they must hit until >=17
 
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//hit stand new game methods hooked to html buttons

//hit button gives player new card... adds its value to total

const hitBtn = document.getElementById("hit")
   
function playerHit(){ 
    console.log(dealerCards)
    const playerHit = deck.shift()
    playerCards.push(playerHit)
    console.log("Players Cards" , playerCards)
   // console.log("Players Total" , playerTotalPoints)
    console.log(deck)
    
    }
    hitBtn.addEventListener("click", playerHit)
// Dealer hit doesn't need a button because it will be done automatically 
// need to make it where dealer will only hit AFTER player stands
    function dealerHit(){ 
       
        const dealerHit = deck.shift()
        playerCards.push(dealerHit)
        console.log("Dealers Cards" , dealerCards)
       // console.log("Dealers Total" , dealerTotalPoints)
        console.log(deck)
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//STAND BUTTON
    //stand button stops player from taking cards... lets dealer have the option to hit or stand
    const standBtn = document.getElementById("stand")
   // standBtn.addEventListener("click", revealCard)
//NEW HAND BUTTON   
    //new hand button clears the board and deals the player 2 face up cards and dealer 1 face up 1 face down
 
   function clearTable(){
    dealerCards.length = 0
    playerCards.length=0
   }
   function newHand(){
    clearTable()
     }
    const newHandBtn = document.getElementById("newHand")
    newHandBtn.addEventListener("click",newHand)
// Deal Button
const dealBtn = document.getElementById("newDeal")
dealBtn.addEventListener("click" , newDeal)

function newDeal(){
   
    //dealPlayerCards(deck)
    //dealDealerCards(deck)
    console.log(deck)
    console.log("Players Cards" , dealPlayerCards(deck))
    console.log("Dealers Cards" , dealDealerCards(deck))
    }
//scoreboard 
    //when player wins add 1 to player
    //when dealer wins add 1 to dealer

//function that displays whatever cards the player is dealt
    // function displayPlayerCards(card){
    //     let img = document.createElement("")
    // }

   
        
    



