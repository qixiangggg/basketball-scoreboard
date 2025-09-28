let homeScore = document.querySelector("#home-score")
let guestScore = document.querySelector("#guest-score")
let homeScoreCounter = 0
let guestScoreCounter = 0

function addOneHomeScore(){
    homeScoreCounter += 1
    homeScore.textContent = homeScoreCounter
}

function addTwoHomeScore(){
    homeScoreCounter += 2
    homeScore.textContent = homeScoreCounter
}

function addThreeHomeScore(){
    homeScoreCounter += 3
    homeScore.textContent = homeScoreCounter
}

function addOneGuestScore(){
    guestScoreCounter += 1
    guestScore.textContent = guestScoreCounter
}

function addTwoGuestScore(){
    guestScoreCounter += 2
    guestScore.textContent = guestScoreCounter
}

function addThreeGuestScore(){
    guestScoreCounter += 3
    guestScore.textContent = guestScoreCounter
}