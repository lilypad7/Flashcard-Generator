var inquirer = require('inquirer');

function BasicCard(front, back) {
    this.front = front;
    this.back = back;

    this.printInfo = function(){
        console.log("Front: " + this.front + "\nBack: " + this.back);
    }
}

var frontCard = [];
var backCards= [];

var count = 0; 

var createBasicCard = function() {
    if (count<2) {
        inquirer.prompt([{
            name: "front",
            message: "Who was the first president of the United States?"
        },{
            name: "back",
            message: "George Washington"
        }]).then(function(answers){
            var newBasicCard = new BasicCard(answers.front, answers.back);
            newBasicCard.printInfo();
            FrontOfCards.push(answers.front);
            BackOfCards.push(answers.back);
            count++;
            createBasicCard();
        })
    }
    else {
        console.log("All Flash Cards Created!");
    }
}
createBasicCard();

module.exports = BasicCard;