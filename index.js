// select these HTML elements
const numberContainer = document.getElementById("number-container");
const quiz = document.getElementById("quiz");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const goBack = document.getElementById("goBack");
document.getElementById("turns").style.display = "none"; // to hide all the elements page
document.getElementById("answers").style.display = "none"; // to hide all the elements page

// create Buttons days
for (let i = 1; i <= 31; i++) {
  let button = document.createElement("button");
  button.className =
    " btn btn-danger d-flex justify-content-center align-items-center number ";
  button.innerHTML = i;
  numberContainer.appendChild(button);

  // get today
  const date = new Date();
  const currentDate = date.getDate();

  // to disable that day not match today
  if (currentDate !== i) {
    button.setAttribute("disabled", true);
  } else {
    button.style.backgroundColor = "green";
  }

  //create Results handler
  showResults = () => {
    document.getElementById("content-page").style.display = "none"; // to hide all the elements page
    document.getElementById("answers").style.display = "block"; // to hide all the elements page

    // create go back button
    let goBackButton = document.createElement("button");
    goBackButton.className = "btn btn-secondary";
    goBackButton.innerText = "Go Back";
    goBackButton.setAttribute("disabled", true);
    goBack.appendChild(goBackButton);

    goBack.addEventListener("click", () => {
      document.getElementById("content-page").style.display = "block"; // to show all the elements page
      document.getElementById("question").style.display = "none"; // to hide all the question section
      button.setAttribute("disabled", true); // to disable all the buttons days
      document.getElementById("turns").style.display = "block"; // to hide all the elements page
      button.style.removeProperty("background-color");
    });

    const randomNumber = Math.round(Math.random() * 41); // create random number

    // get data from question.json file
    fetch("./questions.json")
      .then((res) => res.json())
      .then((data) => {
        const question = data[randomNumber].question;
        const answer1 = data[randomNumber].answers.a;
        const answer2 = data[randomNumber].answers.b;
        const answer3 = data[randomNumber].answers.c;
        const correctAnswer = data[randomNumber].correctAnswer;

        quiz.innerHTML = question;
        answerA.innerHTML = answer1;
        answerB.innerHTML = answer2;
        answerC.innerHTML = answer3;
        answerA.className = "btn-info m-2 rounded-lg";
        answerB.className = "btn-info m-2 rounded-lg";
        answerC.className = "btn-info m-2 rounded-lg";

        // add action to answers buttons
        answerA.addEventListener("click", () => {
          goBackButton.removeAttribute("disabled");
          answerA.setAttribute("disabled", true);
          answerB.setAttribute("disabled", true);
          answerC.setAttribute("disabled", true);

          if (answer1 == correctAnswer) {
            // alert("Your answer is correct");
            answerA.className = "btn-success m-2 rounded-lg";
            answerB.className = "btn-danger m-2 rounded-lg";
            answerC.className = "btn-danger m-2 rounded-lg";
          } else {
            // alert("Your answer is wrong");
            answerA.className = "btn-danger m-2 rounded-lg";
            if (answerB == correctAnswer) {
              answerB.className = "btn-success m-2 rounded-lg";
              answerC.className = "btn-danger m-2 rounded-lg";
            } else {
              answerC.className = "btn-success m-2 rounded-lg";
              answerB.className = "btn-danger m-2 rounded-lg";
            }
          }
        });

        answerB.addEventListener("click", () => {
          goBackButton.removeAttribute("disabled");
          answerA.setAttribute("disabled", true);
          answerB.setAttribute("disabled", true);
          answerC.setAttribute("disabled", true);

          if (answer2 == correctAnswer) {
            // alert("Your answer is correct");
            answerB.className = "btn-success m-2 rounded-lg";
            answerA.className = "btn-danger m-2 rounded-lg";
            answerC.className = "btn-danger m-2 rounded-lg";
          } else {
            // alert("Your answer is wrong");
            answerB.className = "btn-danger m-2 rounded-lg";
            if (answerA == correctAnswer) {
              answerA.className = "btn-success m-2 rounded-lg";
              answerC.className = "btn-danger m-2 rounded-lg";
            } else {
              answerC.className = "btn-success m-2 rounded-lg";
              answerA.className = "btn-danger m-2 rounded-lg";
            }
          }
        });

        answerC.addEventListener("click", () => {
          goBackButton.removeAttribute("disabled");
          answerA.setAttribute("disabled", true);
          answerB.setAttribute("disabled", true);
          answerC.setAttribute("disabled", true);

          if (answer3 == correctAnswer) {
            // alert("Your answer is correct");
            answerC.className = "btn-success m-2 rounded-lg";
            answerA.className = "btn-danger m-2 rounded-lg";
            answerB.className = "btn-danger m-2 rounded-lg";
          } else {
            // alert("Your answer is wrong");
            answerC.className = "btn-danger m-2 rounded-lg";
            if (answerA == correctAnswer) {
              answerA.className = "btn-success m-2 rounded-lg";
              answerB.className = "btn-danger m-2 rounded-lg";
            } else {
              answerB.className = "btn-success m-2 rounded-lg";
              answerA.className = "btn-danger m-2 rounded-lg";
            }
          }
        });
      });
  };

  // add action to days buttons
  button.addEventListener("click", showResults);
}
