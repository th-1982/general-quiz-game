// JavaScript for welcome section and creating a username
// get an element using its ID
let inputElement = document.getElementById('user-input');

// this variable is where will store the users name
let usersName = '';

// store users level
let chosenLevel = '';

// get the div of the questions using its ID
let questionsDiv = document.getElementById("questions-div");

// this function is for when user presses submit i want to store the users name
// this is for welcome section
function saveUsersName(event) {

    // this is going to stop the page from refreshing
    event.preventDefault();

    // collect the value of the input element and
    // store it in the usersName variable
    usersName = inputElement.value;

    // i want to a welcome message to the user
    let userh3 = document.getElementById('user');

    // show the users name on the next page
    userh3.innerText = `Welcome ${usersName}`;

    let quizSections = document.getElementsByClassName('sections');

    // hide the current section
    // add the hide class to the welcome section
    quizSections[0].classList.add('hide');

    // remove the hide class
    quizSections[1].classList.remove('hide');

    // after i want to show the next one
    // this will add the show class
    quizSections[1].classList.add('show');

}

// this function is for choose level section

function goToQuiz(event) {

    // this is going to stop the page from refreshing
    event.preventDefault();

    let levels = document.getElementsByName('level');

    // i want to loop through all the levels
    // and find the one that was checked
    levels.forEach(level => {

        //this if state if the level checked is true
        if (level.checked == true) {

            // get the h5 that will display the level
            let levelh5 = document.getElementById('level-choosen');

            // display the level choosen to the user
            levelh5.innerText = `Level Choosen: ${level.value}`;

            // store the level
            choosenLevel = level.value;
        }
    });

    // get all sections
    let quizSections = document.getElementsByClassName('sections');


    // hide the current section
    quizSections[1].classList.add('hide');

    // this will remove the hide class
    quizSections[2].classList.remove('hide');

    // after i want to show the next one
    // this will add the show class
    quizSections[2].classList.add('show');

    // get the current quiz question element
    let quizQuestionh4 = document.getElementById('quiz-question');

    // get the current options and their labels
    let questionElements = document.getElementsByName('question');
    let questionLabelElements = document.getElementsByClassName('label');

    // change the inner text and value of all the elements i just got

    // changing quiz question
    quizQuestionh4.innerHTML = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].question;

    // changing options and labels
    // loop through the current questions
    questionElements.forEach((question, index) => {

        // change the current value of the radio buttons
        // to the current level
        question.value = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].options[index];
        question.checked = false;

        // change the current value of the labels
        // to the current Level
        questionLabelElements.item(index).textContent = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].options[index];
    });
}

