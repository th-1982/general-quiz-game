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

