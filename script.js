function getComputerChoice()
{
    let nb = Math.random();
    if (nb < 0.34)
    {
        return "rock";
    }
    else if (nb < 0.67)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    ans = prompt("Please enter your choice: rock, paper, or scissors").valueOf();
    return ans.toLowerCase();
}

humanScore = 0;
computerScore = 0;

function playRound()
{
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (computerChoice === humanChoice)
    {
        console.log("It's a tie! Both chose " + humanChoice);
    }
    else if ((computerChoice === "rock" && humanChoice === "scissors") ||
             (computerChoice === "paper" && humanChoice === "rock") ||
             (computerChoice === "scissors" && humanChoice === "paper"))
    {
        computerScore++;
        console.log("You lose! Computer chose " + computerChoice);
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper"))
    {
        humanScore++;
        console.log("You win! Computer chose " + computerChoice);
    }
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        playRound();
        console.log("Score: You " + humanScore + " - Computer " + computerScore);
    }
}

game();

console.log("Final Score: You " + humanScore + " - Computer " + computerScore);
