const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let min;
let max;
let secretNum;

let randomNum = function(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}


rl.question("Welcome to the Guessing Game :)\nChoose a minimum number\n", (minNum) =>{
        min = minNum;
    rl.question("Awessome, now choose a maximum nurmber\n", (maxNum) => {
        max = maxNum;
        console.log(`Ok, Got it! \nI'm thinking of a number between ${min} and ${max}`);
        secretNum = randomNum(min, max)
        guess()
    });    
});

let guess = function() {
    rl.question("Enter you guess\n", (answer) => {
        if (answer < secretNum) {
            console.log("Nope! Too low :\ try again...\n");
            guess()
        }else if (answer > secretNum) {
            console.log("Not this time, too high. Try again...\n");
            guess()
        }else {
            console.log('You must be psychic! You win the game!\n');
            rl.question("Enter your name for a high score!\n", ans => {
                console.log('jk there are no high scores here :D');
                rl.close()
            })
        }
    })
}
