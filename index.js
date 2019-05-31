    let wins = 0;
    let losses = 0;
    let ties = 0;

    // this function
    // 1. returns "rock"/"paper"/"scissors" based
    function computersMove () {
        let randInt = Math.floor(Math.random()*3) // generate between 0,1,2
        if (randInt === 0){
            return "rock"
        }
        if (randInt === 1){
            return "paper"
        }
        if (randInt === 2){
            return "scissors"
        }
    }

    // this function
    // 1. Increments the wins/ties/losses
    // 2. Updates the number of 
function updateScore(result) {
    if (result === "won") {
        wins = wins + 1;
        document.getElementById("wins").innerHTML = draws;
    }
    if (result === "draws"){
        draws = draws + 1;
        document.getElementById("draws").innerHTML = draws;
    }
    if (result === "lost") {
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;
    }
}
function onClickRock() {
    let cm = computersMove();
    if (cm === "rock"){
        //tied
        updateScore("draw");
        alert("Draw!")
    }
    if (cm === "paper"){
        //lost
        updateScore("lost");
        alert("You lost!")
    }
    if (cm === "scissors"){
        //won
        updateScore("won");
        alert("You won!")
    }
}
function onClickpaper() {
    let cm = computersMove();
    if (cm === "rock"){
        //won
        updateScore("won");
        alert("You won");
    }
    if (cm === "paper");{
        //tied
        updateScore ("draw")
        alert("Draw!")
    }
    if (cm === "scissors"){
        //lost
        updateScore("won");
        alert("You lose!");
    }
}
function onClickScissors() {
    let cm = computersMove();
    if (cm === "rock"){
        //lost
        updateScore ("lost");
        alert("You lose!");
    }
    if (cm === "paper") {
        //won
        updateScore ("won");
        alert("You won!");
    }
    if (cm === "scissors") {
        //draw
        updateScore ("draw)");
        alert("Draw!");
    }
}
document.getElementById("scissors").onclick =  onClickScissors;
document.getElementById("rock").onclock = onClickRock;
document.getElementById("paper").onclick = onClickPaper



    
