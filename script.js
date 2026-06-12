let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let userchoice = choice.getAttribute('id');
        playgame(userchoice);

    })
});
const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    const compchoice = getcompchoice();
    console.log("comp choice=", compchoice);
    let userwin = true;
    if (userchoice === compchoice) {
        document.querySelector('#data').innerText = 'It was a draw.';
        document.querySelector('#data').style.backgroundColor = "blue";
        return;
    }
    else if (userchoice === 'rock') {
        userwin = compchoice === "paper" ? false : true;
    }

    else if (userchoice === 'paper') {
        userwin = compchoice === 'scissor' ? false : true;
    }
    else if (userchoice === 'scissor') {
        userwin = compchoice === 'rock' ? false : true;

    }
    getwin(userwin);
}
function getwin(userwin) {
    if (userwin) {
        userscore++;
        document.querySelector('.userscore').innerText = userscore;
        document.querySelector('#data').innerText = 'You win';
        document.querySelector('#data').style.backgroundColor = "green";
    }
    else {
        compscore++;
        document.querySelector('.compscore').innerText = compscore;
        document.querySelector('#data').innerText = 'You lose';
        document.querySelector('#data').style.backgroundColor = "red";
    }
}
const getcompchoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];


}
