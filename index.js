// select these HTML elements
const numberContainer = document.getElementById("number-container");
const quiz = document.getElementById("quiz");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");

const Questions = [];

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
        Questions.splice(0, Questions.length); //remove all elements from the array and clean the original array.
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

        answerA.innerHTML = answer1;
        console.log(answerA);
        answerB.innerHTML = answer2;
        answerC.innerHTML = answer3;

        answerA.addEventListener("click", () => {
          if (answer1 == correctAnswer) {
            alert("Your answer is correct");
            answerA.className = "btn-success";
            answerB.setAttribute("disabled", true);
            answerC.setAttribute("disabled", true);
            button.setAttribute("disabled", true);

          } else {
            answerA.className = "btn-danger";
            answerB.setAttribute("disabled", true);
            answerC.setAttribute("disabled", true);
            alert("Your answer is wrong");
            button.setAttribute("disabled", true);

          }
        });

        answerB.addEventListener("click", () => {
          if (answer2 == correctAnswer) {
            alert("Your answer is correct");
            answerB.className = "btn-success";
            answerA.setAttribute("disabled", true);
            answerC.setAttribute("disabled", true);
            button.setAttribute("disabled", true);

          } else {
            answerB.className = "btn-danger";
            answerA.setAttribute("disabled", true);
            answerC.setAttribute("disabled", true);
            alert("Your answer is wrong");
            button.setAttribute("disabled", true);

          }
        });

        answerC.addEventListener("click", () => {
          if (answer3 == correctAnswer) {
            alert("Your answer is correct");
            answerC.className = "btn-success";
            answerB.setAttribute("disabled", true);
            answerA.setAttribute("disabled", true);
            button.setAttribute("disabled", true);

          } else {
            answerC.className = "btn-danger";
            answerB.setAttribute("disabled", true);
            answerA.setAttribute("disabled", true);
            alert("Your answer is wrong");
            button.setAttribute("disabled", true);

          }
        });
      });
  };

  button.addEventListener("click", showResults);
}
