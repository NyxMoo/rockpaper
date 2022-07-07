


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
    result.textContent = '';
    const computerAnswer = computerPlay();


    
    const playerch = document.createElement('p');
    playerch.textContent = 'You chose ' + playerAnswer;
    playerch.style.margin = '0px';
    result.appendChild(playerch);

    const para = document.createElement('p');
    para.textContent = 'Computer chose ' + computerAnswer;
    para.style.margin = '0px';
    result.appendChild(para);

    const round = document.createElement('p');
    round.textContent = playRound(playerAnswer, computerAnswer);
    round.style.margin = 'px';
    result.appendChild(round);

    const total = document.createElement('p');
    total.textContent = `wins: ${wins} \nlosses: ${losses} \ndraws: ${draws}`;
    total.style.margin = '0px';
    result.appendChild(total)

    if (wins == 5) {
        result.textContent = 'you win pog';
        wins = 0;
        losses = 0;
        draws = 0;
    } else if (losses == 5) {
        result.textContent = 'you lose sadge';
        wins = 0;
        losses = 0;
        draws = 0;
    }

};  


const rock = document.getElementById('rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerAnswer = "";

rock.style.color = "blue";

function playerChoice() {
    playerAnswer = this.id;
};
rock.addEventListener('click', playerChoice);
rock.addEventListener('click', game);

paper.addEventListener('click', playerChoice);
paper.addEventListener('click', game);

scissors.addEventListener('click', playerChoice);
scissors.addEventListener('click', game);

const result = document.getElementById('results');
result.style.cssText = 'height: auto; width: 400px; border: 4px solid black; margin: 100px; box-sizing: border-box;'


