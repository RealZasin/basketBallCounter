let homeScoreEl = document.getElementById("scoreHomeNumber");
let guestScoreEl = document.getElementById("scoreGuestNumber");
let homeScore = 0
let homeScore2 = 0

function addOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addOne2() {
    homeScore2 += 1
    guestScoreEl.textContent = homeScore2
}

function addTwo2() {
    homeScore2 += 2
    guestScoreEl.textContent = homeScore2
}

function addThree2() {
    homeScore2 += 3
    guestScoreEl.textContent = homeScore2
}
