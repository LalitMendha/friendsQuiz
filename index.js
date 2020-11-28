const chalk = require('chalk');
console.log(chalk.white.bgBlack.bold("Welcome to " + "F"+chalk.red(".")+"R"+chalk.yellow(".")+"I"+chalk.blue(".")+"E"+chalk.red(".")+"N"+chalk.yellow(".")+"S"+chalk.blue(".")+ "quiz !!"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + chalk.bold(userName) + " Welcome to" + "F"+chalk.red(".")+"R"+chalk.yellow(".")+"I"+chalk.blue(".")+"E"+chalk.red(".")+"N"+chalk.yellow(".")+"S"+chalk.blue(".")+ "Quiz !!");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var questionArray = [{
  question: "How many times was Ross legally divorced?",
  answer: "3",
  options: ["2", "3", "5", "6"]
},
{
  question: "Where did carol first meet Susan?",
  answer: "At Gym",
  options: ["In college" ,"At work", "At Gym", "At Central Perk"]
},
{
  question: "How did Susan and Ross came up with Ben's name?",
  answer: "It was on janitor's name tag",
  options: ["It was a doctor name" ,"They both had uncles named Ben", "It’s the name of their favorite actor", "It was on janitor's name tag"]
},
{
  question: "How long did Ross and Emily date before they got engaged?",
  answer: "6 weeks",
  options: ["14days" ,"6 weeks", "A year", "3 months"]
},
{
  question: "Rachel left Ross a drunken voicemail confessing her feelings after Ross and Julie were about to take what big relationship step?",
  answer: "Get a cat together",
  options: ["Move in together" ,"Get a cat together", "Elope", "Meet Julie's parents"]
},
{
  question: "What was the name of the first restaurant Monica was head chef at?",
  answer: "Alessandro’s",
  options: ["Alessandro’s" ,"Moondance Diner", "Iridium", "Javu"]
},
{
  question: "Which of the following Chandler “facts” is false?",
  answer: "He dated Phoebe as a kid",
  options: ["He has third nipple" ,"He is missing a pinky toe", "He once won a Vanilla Ice lookalike contest", "He dated Phoebe as a kid"]
},
{
  question: "How many times did Chandler and Janice break up during the entirety of Friends?",
  answer: "5",
  options: ["1" ,"2", "5", "8"]
},
{
  question: "How many sisters did Joey Tribbiani have?",
  answer: "7",
  options: ["3" ,"7", "5", "9"]
},
{
  question: "How did Phoebe’s half-brother Frank meet his fiancé Alice",
  answer: "She was his teacher",
  options: ["She was his favorite grocery store clerk" ,"She was his teacher", "She was his ER nurse", "She was his coworkers mom"]
}
]
var scoreArray = [{
  name: "Dhiraj",
  score: "7"
},
{
  name: "Sahil",
  score:"5"
},
]
var question, answer, score, index;
score = 0;
for(var i=0; i< questionArray.length; i++){
  question = questionArray[i].question;
  index = readlineSync.keyInSelect(questionArray[i].options, question, 0);
 if(questionArray[i].options[index] === undefined){
   break;
 }else{
   answer = questionArray[i].options[index];
 }
  score = checkAnswer(answer, i, score);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(chalk.bold.white.bgYellow("Your Total score is: ", score));
var lowFlag = checkHighscore(score);
 if(lowFlag === ""){
  console.log("Congratulations !! You have scored the highest points. Please send me the screenshot of points so i can update it in my system") 
 } 
updateScore(userName, score);
display(); 
console.log(chalk.bold.underline.white.bgBlue("~~~~~~ Thank You " +userName+ "!! ~~~~~~~~"));


function checkAnswer(inputAnswer, index, score) {
  var correctAnswer = questionArray[index].answer;
  if(correctAnswer.toUpperCase() == inputAnswer.toUpperCase()){
    console.log(chalk.bold.white.bgBlue("That's Correct !!"));
    score = score + 1;
    console.log(chalk.bold.white.bgYellow("Your score is: ", score));
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    return score;
  }else {
    console.log(chalk.bold.white.bgBlue("Sorry that's wrong answer!!"));
    score = score + 0;
    console.log(chalk.bold.white.bgYellow("Your score is: ", score));
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    return score;
  }
}

function updateScore(userName, score){
  var result = {
    name: userName,
    score: score
  }
  scoreArray.unshift(result);
}

function display(){
  for(var i=0; i<scoreArray.length; i++) {
    console.log(chalk.bold.white(scoreArray[i].name, "-", scoreArray[i].score));
  }
}

function checkHighscore(score){
  var lowFlag = "";
  for(var i=0; i<scoreArray.length; i++){
    if(scoreArray[i].score < score){
      
    }else{
      lowFlag = "X";
      break;
    }
  }
  return lowFlag;
}

