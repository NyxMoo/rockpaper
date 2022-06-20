


let computerPlay = () => {
    let result = Math.floor(Math.random() * 4);
    if (result == 0) {
        return 'rock';
    } else if (result == 1) {
        return 'paper';
    } else {
        return 'scissors';
    };

};

let playRound = (playerAnswer, computerAnswer) => {
    let result;
    if (playerAnswer.toLowerCase() == computerAnswer) {
        draws++;
        return 'It\'s a draw';
    } else if (playerAnswer.toLowerCase() == 'rock') {
        switch (computerAnswer) {
            case 'paper':
                losses++;
                return 'You lose, rock loses to paper';
                break;
            case 'scissors':
                wins++;
                return 'You win, rock beats scissors';
                break;
            default:
                return 'something went wrong';
        }
    } else if (playerAnswer.toLowerCase() == 'paper') {
        switch (computerAnswer) {
            case 'rock':
                wins++;
                return  'You win, paper beats rock';
                break;
            case 'scissors':
                losses++;
                return  'You lose, paper loses to scissors';
                break;
            default:
                return 'something went wrong';
        }
        
    } else if (playerAnswer.toLowerCase() == 'scissors') {
        switch (computerAnswer) {
            case 'rock':
                losses++;
                return 'You lose, scissors lose to rock';
                break;
            case 'paper':
                wins++;
                return 'You win, scissors beat paper';;
                break;
            default:
                return 'something went wrong';
        }
    }

};

let wins = 0;
let losses = 0;
let draws = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        const computerAnswer = computerPlay();
        const playerAnswer = prompt('Please enter rock, paper or scissors.', 'rock')
        console.log('Computer chose ' + computerAnswer)
        console.log(playRound(playerAnswer, computerAnswer))
        console.log(`wins: ${wins} losses: ${losses} draws: ${draws}`)
     }
    console.log(`The results are \nwins: ${wins} \nlosses: ${losses} \ndraws: ${draws}`)
};  
game();