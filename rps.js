function getComputerChoice(){
    let random=Math.floor(Math.random()*3)
    switch(random){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
        default:
            "Error";
    }
}
// console.log(getComputerChoice());

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase()
    computerSelection=computerSelection.toLowerCase()

    if(playerSelection==="rock" && computerSelection==="scissors"){
        return "You Win! Rock beats scissors"
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        return "You Win! paper beats Rock"
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        return "You Win! Scissors beats paper"
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        return "you Lose! paper beats rock"
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        return "you Lose! scissors beats paper"
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        return "you Lose! rock beats scissors"
    }
    else if(playerSelection===computerSelection){
        return "Tie";
    }
    else{
        return "Invalid"
    }


}

function playGame(){
    let playerScore=0;
    let computerScore=0;
    let result=""

    for(i=0;i<5;i++){
        let playerSelection=prompt("Rock,Paper or Scissors")
        result=playRound(playerSelection,getComputerChoice());
        console.log(result);
        if(result.charAt(4)==="W"){
            playerScore++
        }
        else if(result.charAt(4)==="L"){
            computerScore++
        }
        else{
            continue;
        }

    }

    console.log("Final Result: Player: "+playerScore+" Computer: "+computerScore); 

    if(playerScore>computerScore){
        return "YOU WIN!!!"
    }
    else if(playerScore<computerScore){
        return "YOU LOSE"
    }
    else{
        return "TIE";
    }

}
console.log(playGame());
