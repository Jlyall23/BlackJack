
////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//Empty variables   
let playerTotal = 0
let dealerTotal = 0
let playerScore = 0
let dealerScore = 0
let message = ''
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Buttons
const standBtn = document.getElementById("stand")
const hitBtn = document.getElementById("hit")
const newHandBtn = document.getElementById("newHand")
const dealBtn = document.getElementById("newDeal")
        newHandBtn.disabled=true
        dealBtn.disabled=true
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//INNER HTML
//Player Points
    let playerTotalHTML = document.getElementById("playerPoints")
    //playerTotalHTML.innerHTML = playerTotal
    
    //Dealer Points
    let dealerTotalHTML = document.getElementById("dealerPoints")
    //dealerTotalHTML.innerHTML = dealerTotal

    let playerScoreHTML = document.getElementById("playerScoreNum")
    //playerScoreHTML.innerHTML = playerScore
    
    let dealerScoreHTML = document.getElementById("dealerScoreNum")
    //dealerScoreHTML.innerHTML = dealerScore
    
    let messageHTML = document.getElementById("results")
    //messageHTML.innerHTML = message
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //Array holding the deck of 52 cards
    
    const deck =['2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC','AC','2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD','AD','2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH','AH','2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS','AS']
    
    //Key value pairs designating the value of each card

const cardValue =  {'2C':2,'3C':3,'4C':4,'5C':5,'6C':6,'7C':7,'8C':8,'9C':9,'10C':10,'JC':10,'QC':10,'KC':10,'AC':1,'2D':2,'3D':3,'4D':4,'5D':5,'6D':6,'7D':7,'8D':8,'9D':9,'10D':10,'JD':10,'QD':10,'KD':10,'AD':1,'2H':2,'3H':3,'4H':4,'5H':5,'6H':6,'7H':7,'8H':8,'9H':9,'10H':10,'JH':10,'QH':10,'KH':10,'AH':1,'2S':2,'3S':3,'4S':4,'5S':5,'6S':6,'7S':7,'8S':8,'9S':9,'10S':10,'JS':10,'QS':10,'KS':10,'AS':1}

//Method that shuffles the deck (I run it multiple times inside this function for better shuffling )

function shuffleCards(){
    deck.sort(()=>Math.random()-0.5)
    deck.sort(()=>Math.random()-0.5)
    deck.sort(()=>Math.random()-0.5)
    console.log(deck)
}

//shuffles cards and logs them
shuffleCards(deck)

//deals 2 cards to each.. resets array to empty after hand and deals 2 more again
let playerCards = []
playerCards =  dealPlayerCards(deck)
let dealerCards= []
dealerCards = dealDealerCards(deck)
///////////////////////////////////////////////////////////////////////////////////////////

//Function to deal 2 cards to player  

function dealPlayerCards(){
   //loop to give 2 cards to player
    for(let i=0; i<2;i++){
        //method to remove the cards from the deck when they are added to players hand
        
        const dealtPlayerCard= deck.shift()
        playerCards.push(dealtPlayerCard)
    }
    playerTotalPoints()
    return playerCards
   
}

//deals 2 cards to dealer

function dealDealerCards(){
  
     //loop to give dealer 2 cards
    for(let i=0;i<2;i++){
        //method to remove the cards from the deck when they are added to dealers hand  
        
        const dealtDealerCard = deck.shift()
        dealerCards.push(dealtDealerCard)
    }
    //dealerCards[0] = "hidden" //hides first dealer card 
    dealerTotalPoints()
    return dealerCards
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function to add the value of each player card to get the total points
function playerTotalPoints(){
        let playerAceAmount=0
         playerTotal=0
         //Adds value of all cards in array
         for(let i=0; i<playerCards.length; i++){
            let card = playerCards[i]
               playerTotal += cardValue[`${card}`]
               //removes string from card ex. "4C" = 4C
               let value = parseInt(card)
               
            // if card is Not a number it checks to see if its an ace 
               if(isNaN(value)){
                //if player has 10 or less (11 with the aces 1 pt) add 10 pts.. makes ace worth 11
                if(card === 'AC' || card === 'AS'|| card === 'AD' || card === 'AH' && playerTotal <=11){
                playerTotal +=10
                playerAceAmount ++
               } else if (card === 'AC' || card === 'AS'|| card === 'AD' || card === 'AH' && playerTotal >=12){
                 playerTotal += 0
             }else{
                 
             }
                }
                //if player busts BUT has an ace it subtracts 10 to make ace worth 1pt again
                if(playerTotal >21 && playerAceAmount >0){
                 playerTotal -=10
                 playerAceAmount --
                }
                playerTotalHTML.innerHTML = playerTotal
  }  console.log("Players Total" ,playerCards ,playerTotal)
}

    //Function to add the value of each dealer card to get the total points
    function dealerTotalPoints(){
         dealerTotal=0
         let aceAmount = 0
        for(let i=0; i<dealerCards.length; i++){
           let card = dealerCards[i]
           dealerTotal += cardValue[`${card}`]
           let value = parseInt(card)
          

          
           if(isNaN(value)){
           if(card === 'AC' || card === 'AS'|| card === 'AD' || card === 'AH' && dealerTotal <=11){
           dealerTotal += 10
           aceAmount ++
          } else if (card === 'AC'|| card === 'AS'|| card === 'AD' || card === 'AH' && dealerTotal >=12){
            dealerTotal += 0
            aceAmount++
        }else{
           }
           }
           if(dealerTotal >21 && aceAmount >0){
            dealerTotal -=10
            aceAmount --
           }
           dealerTotalHTML.innerHTML = dealerTotal
    } console.log("Dealer Total", dealerCards, dealerTotal)
    
    }
    
    playerTotalPoints()
    dealerTotalPoints()
    BlackJackCheck()
       
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////           

//if else statements for blackjack
function BlackJackCheck(){
    if (playerTotal ===21 && dealerTotal ===21){
        console.log(" Black Jack Push")
        hitBtn.disabled=true
        standBtn.disabled=true
        newHandBtn.disabled=false
        let message = 'Player and Dealer have Blackjack. Push'
        messageHTML.innerHTML = message
    }else if(playerTotal ===21 && dealerTotal !=21){
        console.log("BlackJack!!!!")
        hitBtn.disabled=true
        standBtn.disabled=true
        newHandBtn.disabled=false
        let message = 'Player has Blackjack! Player Wins'
        messageHTML.innerHTML = message
    }else if(dealerTotal ===21 && playerTotal !=21){
        console.log("Dealer has BlackJack")
        hitBtn.disabled=true
        standBtn.disabled=true
        newHandBtn.disabled=false
        let message = 'Dealer has Blackjack! Dealer Wins'
        messageHTML.innerHTML = message
    }else{
        console.log("Nobody has Blackjack... Carry on")
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function playerHit(){ 
    //pulls card from deck adds to playercards
    const playerHit = deck.shift()
    playerCards.push(playerHit)
    //updates DOM
   playerTotalHTML.innerHTML = playerTotal
   
    playerTotalPoints()
    
    if(playerTotal>=22){
        console.log("BUST")
        hitBtn.disabled = true
        standBtn.disabled = true
        newHandBtn.disabled = false
        //dealer +1
    }
    }
    hitBtn.addEventListener("click", ()=>playerHit())
/////////////////////////////////////////?///////////////////////////////////////////////////////////////////



  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// STAND BUTTON
   //checks if dealer is under 17. if so, runs dealerHit()
    function doesDealerHit(){
        hitBtn.disabled = true
        if(dealerTotal >= 17 && dealerTotal<=21){
           console.log("dealer stands")
           let message = 'Dealer is over 17... Stands'
           messageHTML.innerHTML = message
           standBtn.disabled=true
           newHandBtn.disabled=false
        
        }else if (dealerTotal <17){
            console.log("Dealer is under 17... must hit")
            let message = 'Dealer is under 17...must hit'
            messageHTML.innerHTML = message
            dealerHit()

        }else{
            console.log("Dealer Busts")
          
        hitBtn.disabled=true
        standBtn.disabled=true
        newHandBtn.disabled=false
        }
}

standBtn.addEventListener("click", ()=>{doesDealerHit()})
////////////////////////////////////////////////////////
    function dealerHit() {

        const dealerHitCard = deck.shift()
        dealerCards.push(dealerHitCard)
     console.log("Dealers Cards" , dealerCards , dealerTotal)
     dealerTotalHTML.innerHTML = dealerTotal
       dealerTotalPoints()
     }
  // standBtn.addEventListener("click", revealCard)
  ////////////////////////////////////////////////////////////////////////////////////

//NEW HAND BUTTON   
    //new hand button clears the board 
 
   function clearTable(){
    scoreBoard()
    dealerCards.length = 0
    playerCards.length=0
    playerTotal=0
    dealerTotal=0
    playerTotalHTML.innerHTML = playerTotal
    dealerTotalHTML.innerHTML = dealerTotal
    
   }
   function newHand(){
    hitBtn.disabled = false
    standBtn.disabled = false
    dealBtn.disabled = false
    clearTable()
     }
   
    newHandBtn.addEventListener("click",newHand)
///////////////////////////////////////////////////////////////////////////////////////////////
// Deal Button

//Deals out a new hand
function newDeal(){
    
    let message = 'Good Luck!'
    messageHTML.innerHTML = message
    newHandBtn.disabled=true
    console.log(deck)
    console.log("Players Cards" , dealPlayerCards(deck))
    console.log("Dealers Cards" , dealDealerCards(deck))
    playerTotalHTML.innerHTML = playerTotal
    dealerTotalHTML.innerHTML = dealerTotal
}

dealBtn.addEventListener("click" , newDeal)
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//scoreboard 
//when player wins add 1 to player
//when dealer wins add 1 to dealer


function scoreBoard(){
    
    //player bust
    if(playerTotal > 21 && dealerTotal <=21){
        console.log("Player Busts, Dealer Wins")
        dealerScore ++
        dealerScoreHTML.innerHTML = dealerScore
        playerScoreHTML.innerHTML = playerScore
        let message = 'Player Busts. Dealer Wins'
        messageHTML.innerHTML = message

         //dealer bust
    }else if(playerTotal <=21 && dealerTotal >21){
        console.log("Dealer Busts, Player Wins")
        playerScore ++
        dealerScoreHTML.innerHTML = dealerScore
        playerScoreHTML.innerHTML = playerScore
        let message = 'Dealer Busts. Player Wins'
        messageHTML.innerHTML = message

        //scores tied
    }else if(playerTotal === dealerTotal){
        console.log("Push")
        dealerScoreHTML.innerHTML = dealerScore
        playerScoreHTML.innerHTML = playerScore
        let message = 'Player and Dealer tied. Push'
        messageHTML.innerHTML = message
        
        //player > dealer no bust
    }else if(playerTotal > dealerTotal && playerTotal <=21){
        console.log("Player Wins")
        playerScore ++
        dealerScoreHTML.innerHTML = dealerScore
        playerScoreHTML.innerHTML = playerScore
        let message = 'Player Wins!'
        messageHTML.innerHTML = message

        //dealer > player no bust
    }else if(playerTotal < dealerTotal && dealerTotal <=21){
        console.log("Dealer Wins")
        dealerScore ++
        dealerScoreHTML.innerHTML = dealerScore
        playerScoreHTML.innerHTML = playerScore
        let message = 'Dealer Wins'
        messageHTML.innerHTML = message
    }
    console.log("Player Score" , playerScore)
    console.log("Dealer Score" , dealerScore)
   
}
////////////////////////////////////////////

let CARDImg = {
    '2S':"two.png",
    '2C':"two.png",
    '2D':"two.png",
    '2H':"two.png",
    '3S':"three.png",
    '3C':"three.png",
    '3H':"three.png",
    '3D':"three.png",
    '4S':"four.png",
    '4C':"four.png",
    '4H':"four.png",
    '4D':"four.png",
    '5S':"five.png",
    '5C':"five.png",
    '5H':"five.png",
    '5D':"five.png",
    '6S':"six.jpg",
    '6C':"six.jpg",
    '6H':"six.jpg",
    '6D':"six.jpg",
    '7S':"seven.png",
    '7C':"seven.png",
    '7H':"seven.png",
    '7H':"seven.png",
    '8S':"eight.png",
    '8C':"eight.png",
    '8H':"eight.png",
    '8D':"eight.png",
    '9S':"nine.png",
    '9C':"nine.png",
    '9H':"nine.png",
    '9D':"nine.png",
    '10S':"ten.png",
    '10C':"ten.png",
    '10H':"ten.png",
    '10D':"ten.png",
    'JS':"jack.jpg",
    'JC':"jack.jpg",
    'JH':"jack.jpg",
    'JD':"jack.jpg",
    'QS':"queen.png",
    'QC':"queen.png",
    'QH':"queen.png",
    'QD':"queen.png",
    'KS':"king.png",
    'KC':"king.png",
    'KH':"king.png",
    'KD':"king.png",
    'AC':"Ace.png",
    'AS':"Ace.png",
    'AH':"Ace.png",
    'AD':"Ace.png",


}
//dealerCards.map((i)=>displayDealerCards())
let DealerCardsHTML = dealerCards.map(function(){
    
             //function displayDealerCards(){
             let cardPIC = dealerCards[0]

             let dealerCardImg= document.createElement("img")
             
                dealerCardImg.src = "cards/" + CARDImg[cardPIC]
                document.getElementById("dealerCards").append(dealerCardImg)
           //  }
             return dealerCards
        
})

let playerCardDisplay = playerCards.map(playerCard=>{
    let cardPIC = playerCards[0]

    let playerCardImg= document.createElement("img")
    
       playerCardImg.src = "cards/" + CARDImg[cardPIC]
       document.getElementById("playerCards").append(playerCardImg)
  //  }
    return img
})
// function displayDealerCards(){
//      let cardPIC = dealerCards[0]
//      let dealerCardImg= document.createElement("img")
     
//         dealerCardImg.src = "cards/" + CARDImg[cardPIC]
//         document.getElementById("dealerCards").append(dealerCardImg)
// }
//displayDealerCards()
//function that runs when the game/new hand starts
//    function startGame(){
//     let hidden = deck.shift() //turns the hidden card into the the first card in deck
//     dealerTotalx += getCardValue(hidden) //function to find value of hidden card
//     howManyDealerAces = checkForAce() // makes sure hidden card isn't an ace
//     console.log(hidden , dealerTotalx)
//    }


//    startGame()
