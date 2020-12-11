// select these HTML elements
const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const results = document.getElementById("results");
const numberContainer = document.getElementById("number-container");

const Questions = [];
let answer1 = "";
let answer2 = "";
let answer3 = "";

// create Buttons days
for (let i = 1; i <= 31; i++) {
  let button = document.createElement("button");
  button.className = "number btn btn-danger";
  button.innerHTML = i;
  numberContainer.appendChild(button);

  //create Results handler
  showResults = () => {
    // location.reload();
    //redirect to new Page
    // window.location = "./answers.html";

    console.log("number" + i);
    const randomNumber = Math.round(Math.random() * 41);
    console.log(randomNumber);

    fetch("./questions.json")
      .then((res) => res.json())
      .then((data) => {
        // Questions.splice(0, Questions.length); //remove all elements from the array and clean the original array.
        Questions.push(data);
        console.log(Questions);
        const question = Questions[0][randomNumber].question;
        quiz.innerHTML = question;
        console.log(quiz);

        const answer1 = Questions[0][randomNumber].answers.a;
        const answer2 = Questions[0][randomNumber].answers.b;
        const answer3 = Questions[0][randomNumber].answers.c;

        const correctAnswer = Questions[0][randomNumber].correctAnswer;
        console.log(correctAnswer);

        // let buttonA = document.createElement("button");
        // let buttonB = document.createElement("button");
        // let buttonC = document.createElement("button");
        // buttonA.className = " btn btn-secondary";
        // buttonB.className = " btn btn-secondary";
        // buttonC.className = " btn btn-secondary";

        answerA.innerHTML = answer1;
        console.log(answerA);
        answerB.innerHTML = answer2;
        answerC.innerHTML = answer3;

        // quiz.appendChild(quiz);
        // answerA.appendChild(buttonA);
        // answerB.appendChild(buttonB);
        // answerC.appendChild(buttonC);

        // let submitButton = document.createElement("submit");
        // submitButton.className = "btn btn-warning";
        // submitButton.innerText = "Submit";
        // submit.appendChild(submitButton);

        answerA.addEventListener("click", () => {
          if (answer1 == correctAnswer) {
            // alert("this correct");
            answerA.className = "btn-success";
          } else {
            answerA.className = "btn-danger";
            // alert("this wrong");
          }
        });

        answerB.addEventListener("click", () => {
          if (answer2 == correctAnswer) {
            // alert("this correct");
            answerB.className = "btn-success";
          } else {
            answerB.className = "btn-danger";
            // alert("this wrong");
          }
        });

        answerC.addEventListener("click", () => {
          if (answer3 == correctAnswer) {
            // alert("this correct");
            answerC.className = "btn-success";
          } else {
            answerC.className = "btn-danger";
            // alert("this wrong");
          }
        });
      });
  };

  button.addEventListener("click", showResults);
}

//this code down not in use and need deleted in the end

// fetching questions from json :

function buildRandomQuiz() {}

function showResults() {}

// display quiz right away
buildRandomQuiz();

// on submit, show results
// submitButton.addEventListener("click", showResults);

// Step 1 Questions :

// fetching questions from json :

fetch("./questions.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    console.log(Questions);
    // Questions.push(data);
    console.log(Questions);
  });

// Step 2 create functions:
function buildQuiz() {
  // variable to store the HTML output
  const output = [];
}
