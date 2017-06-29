console.log("security_questions.js loaded");

// array of security questions
let securityQuestions = [ "What was your first pet's name?", "What is your mother's maiden name?", "What is your best friend's name?" ];

// array of expected answers
let expectedAnswers = [ "FlufferNutter", "Remington", "Jimmen Marvinludder" ];

let userInput = [];

// iterate through the array one question at a time
  for (i = 0; i < securityQuestions.length; i++) {
      let userAnswer = prompt(securityQuestions[i]);
      //push userAnswer to the userInput array
      userAnswer =
      //if userInput matches expectedAnswer, log in, or else move on to the next prompt
  }
