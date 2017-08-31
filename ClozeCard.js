var inquirer = require('inquirer');

function ClozeCard(fullText, cloze) {
  if (this instanceof ClozeCard) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.createPartialText = function() {
      if (fullText.includes(cloze)) {
        this.partialText = fullText.replace(cloze, "_______");
        } else {
            console.log("Error: " + cloze + " doesn't appear in " + fullText);
        }
    }
        this.createPartialText()
    } else {
        return new ClozeCard(fullText, cloze);
    }
}

var count = 0;

var createClozeCard = function() {
    if (count < 1) {
        inquirer.prompt([{
            name: "fullText",
            message: "_____________ was the first president of the United States."
        },{
            name: "cloze",
            message: "George Washington"
        }]).then(function(answers){
            var newCard = new ClozeCard(answers.fullText, answers.cloze);
            count++;
            console.log(newCard);
            createClozeCard();
        })
    }
    else {
        console.log("All Flash Cards Created!");      
    }
}

createClozeCard();

module.exports = ClozeCard;