var readLine = require('readline-sync');

var score = 0;
var name;
var questionOne = {
  question:"What is the maximum possible length of an identifier?",
  options: ["16","32","64","None of the above"],
  answer: ["None of the above","4"],
  explanation: "The maximum possible length of an identifier is not defined in the python language. It can be of any number."
}
var questionTwo = {
  question:"In which language is Python written?",
  options: ["English","PHP","C","None of the above"],
  answer: ["C","3"],
  explanation: "Python is written in C programming language, and it is also called CPython."
}
var questionThree = {
  question:"Which of the following declarations is incorrect?",
  options:["_x = 2","__x = 3","__xyz__ = 5","None of these"],
  answer:["None of these","4"],
  explanation:"All declarations will execute successfully but at the expense of low readability."
}
var questionFour = {
  question:"What will be the output of this code?\n\"javascript\"[4:]\n",
  options:["java","javascript","script","None of the above"],
  answer:["script","3"],
  explanation:"Slice operation is performed on the string."
}
var questionFive = {
  question:"Why does the name of local variables start with an underscore discouraged?",
  options:["To identify the variable","It confuses the interpreter","It indicates a private variable of a class","None of these"],
  answer:["It indicates a private variable of a class","3"],
  explanation:"Since there is no concept of private variables in Python language, the major underscore is used to denote variables that cannot be accessed from outside the class."
}

var questions = [questionOne, questionTwo, questionThree,questionFour,questionFive]

var topScorers = [{
  name:"Jayasurya",
  score:questions.length
}]

function welcome() {
name = readLine.question("Hello.. What's your name? \n");
console.log("\nHey there "+name+". Welcome to the Quiz to test you knowledge on Python");
}

function play(questionNumber,question, options, answer, explanation) {
  console.log("\n"+"Q"+questionNumber+" "+question+"\n");

  for(var i=0; i<options.length; i++) {
    console.log(i+1,options[i]);
  }

  console.log("\nYou can choose the option numbers or type answer\n");

  var userAns = readLine.question();

  var ansFlag = 0;
  for(var i=0; i<answer.length;i++) {
  if (userAns.toLowerCase() == answer[i].toLowerCase()) {
    console.log("Yayy!! That's correct ");
    score += 1;
    ansFlag = 1;
  }
  }
  if(ansFlag == 0) {
    console.log("Oops!! It's a wrong answer");
    console.log("\nThe correct answer is \""+answer.join("\" or Option \"")+"\"");
  }

  console.log("\nCurrent Score: "+score);
  console.log("---------------------------------------------");
}

function start() {
  for(var i=0; i<questions.length; i++) {
    var questionNumber = i+1;
    play(questionNumber,questions[i].question, questions[i].options, questions[i].answer,questions[i].explanation)
  }
}

function finalScore() {
  console.log("\nYour final score is "+score);

  topScorers.push({name:name,score:score});

  console.log("\nTOP SCORERS - ");
  var maxScore = 0;
  for(var i =0;i<topScorers.length;i++) {
    console.log(topScorers[i].name +" - "+topScorers[i].score)
    if(topScorers[i].score > maxScore) {
      maxScore = topScorers[i].score;
    }
  }

  if(score>=maxScore){
    console.log("\nWoah!! You are the new TOPSCORER.\nWell done...")
  }
  else if(score>=3){
    console.log("\nYou did better than the rest.")
  }

  console.log("\nThank you for playing!!!")
}

welcome()
start()
finalScore()