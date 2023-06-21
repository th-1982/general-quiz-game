// JavaScript for welcome section and creating a username
// get an element using its ID

let inputElement = document.getElementById('user-input');

let usersName = '';
let chosenLevel = '';
let questionsDiv = document.getElementById("questions-div");

// this function is for when user presses submit i want to store the users name
// this is for welcome section
function saveUsersName(event) {

    // this is going to stop the page from refreshing
    event.preventDefault();

    usersName = inputElement.value;

    let userh3 = document.getElementById('user');
    userh3.innerText = `Welcome ${usersName}`;

    let quizSections = document.getElementsByClassName('sections');

    quizSections[0].classList.add('hide');
    quizSections[1].classList.remove('hide');
    quizSections[1].classList.add('show');

}

// this function is for choose level section
function goToQuiz(event) {

    // this is going to stop the page from refreshing
    event.preventDefault();

    let levels = document.getElementsByName('level');

    levels.forEach(level => {
        if (level.checked == true) {
            let levelh3 = document.getElementById('level-choosen'); 
            levelh3.innerText = `Level Choosen: ${level.value}`;
            choosenLevel = level.value;
        }
    });

    // get all sections
    let quizSections = document.getElementsByClassName('sections');

    quizSections[1].classList.add('hide');
    quizSections[2].classList.remove('hide');
    quizSections[2].classList.add('show');

    let quizQuestionh3 = document.getElementById('quiz-question');
    let questionElements = document.getElementsByName('question');
    let questionLabelElements = document.getElementsByClassName('label');
    quizQuestionh3.innerHTML = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].question;

    // changing options and labels
    // loop through the current questions
    Array(...questionLabelElements).forEach((question, index) => {

        question.value = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].options[index];
        question.checked = false;
        questionLabelElements.item(index).textContent = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].options[index];
    });
}

// for quiz section and score tracker

// I have an array of question objects
// this is where all questions is stored
let arrayOfQuestions = {
    Beginner: [
        {
            id: 1,
            question: "What is the capital of USA",
            options: ["Washington DC", "Texas", "Atlanta"],
            correctAnswer: "Washington DC"
        },
        {
            id: 2,
            question: "The first American President to live in the White House was ?",
            options: ["Abraham Lincoln", "Geoge Washington", "John Adams"],
            correctAnswer: "John Adams"
        },
        {
            id: 3,
            question: "How many players are allowed on a Soccer pitch?",
            options: ["10 Players", "11 Players", "12 Players"],
            correctAnswer: "11 Players"
        },
        {
            id: 4,
            question: "Which is the longest river in the world?",
            options: ["River Nile", "River Niger", "Lake Chad"],
            correctAnswer: "River Nile"
        },
        {
            id: 5,
            question: "For drugs, what does efficacy means?",
            options: ["Dosage", "Effectiveness", "Safety"],
            correctAnswer: "Effectiveness"
        },
        {
            id: 6,
            question: "Which country is the largest in the world ?",
            options: ["Russia", "Canada", "Egypt"],
            correctAnswer: "Russia"
        },
        {
            id: 7,
            question: "What is the capital of Germany ?",
            options: ["Paris", "Berlin", "Munich"],
            correctAnswer: "Berlin"
        },
        {
            id: 8,
            question: "Which Planet is the hottest ?",
            options: ["Mercury", "Jupiter", "Venus"],
            correctAnswer: "Mercury"
        },
        {
            id: 9,
            question: "How many teeth does an adult human have ?",
            options: ["28", "32", "30"],
            correctAnswer: "32"
        },
        {
            id: 10,
            question: "How many Planets are currently in the solar system ?",
            options: ["8", "7", "9"],
            correctAnswer: "8"
        },
    ],
    Intermediate: [
        {
            id: 1,
            question: "Which of these factors in a community is a biotic factor?",
            options: ["PH", "Predation", "Temperature"],
            correctAnswer: "Predation"
        },
        {
            id: 2,
            question: "How many hearts does an Octopus have ?",
            options: ["1", "2", "3"],
            correctAnswer: "3"
        },
        {
            id: 3,
            question: "How many lifeboats did the Titanic have ?",
            options: ["24", "20", "14"],
            correctAnswer: "20"
        },
        {
            id: 4,
            question: "Mycoproteins are produced using which organism ?",
            options: ["Animals", "Plants", "Fungi"],
            correctAnswer: "Fungi"
        },
        {
            id: 5,
            question: "Which flies a green, white, and orange (in that order) tricolor flag ?",
            options: ["Ireland", "Ivory Coast", "Italy"],
            correctAnswer: "Italy"
        },
        {
            id: 6,
            question: "Which city is home to the Brandenburg Gate ?",
            options: ["Vienna", "Berlin", "Zurich"],
            correctAnswer: "Berlin"
        },
        {
            id: 7,
            question: "Which of these units is most suitable for measuring the length of a cell ?",
            options: ["Metre", "Micrometre", "kilometre"],
            correctAnswer: "Micrometre"
        },
        {
            id: 8,
            question: "Which app has the most total users ?",
            options: ["Tik Tok", "Snapchat", "Instagram"],
            correctAnswer: "Instagram"
        },
        {
            id: 9,
            question: "Where was tea invented ?",
            options: ["China", "England", "USA"],
            correctAnswer: "China"
        },
        {
            id: 10,
            question: "What is the strongest muscle in the human body ?",
            options: ["Heart", "Jaw", "Glutes"],
            correctAnswer: "Jaw"
        },
    ],
    Advanced: [
        {
            id: 1,
            question: "What company makes the Xperia model of smartphone ?",
            options: ["Sony", "Nokia", "Samsung"],
            correctAnswer: "Sony"
        },
        {
            id: 2,
            question: "Who is generally considered the inventor of the motor car?",
            options: ["Henry Ford", "Henry M. Leland", "Karl Benz"],
            correctAnswer: "Karl Benz"
        },
        {
            id: 3,
            question: "How long did it take to build the Titanic ?",
            options: ["Three Years", "One Year", "Two Years"],
            correctAnswer: "Three Years"
        },
        {
            id: 4,
            question: "Which era immediately followed the American Civil War ?",
            options: ["Reformation", "Renaissance", "Reconstruction"],
            correctAnswer: "Reconstruction"
        },
        {
            id: 5,
            question: "What spirit is used in making a Tom Collins ?",
            options: ["Rum", "Gin", "Vodka"],
            correctAnswer: "Gin"
        },
        {
            id: 6,
            question: "What city hosted the 2002 Olympic Games ?",
            options: ["Beijing", "Tokyo", "Sydney"],
            correctAnswer: "Sydney"
        },
        {
            id: 7,
            question: "In what country did the Battle of Waterloo take place ?",
            options: ["French", "Belgium", "Germany"],
            correctAnswer: "Belgium"
        },
        {
            id: 8,
            question: "Where was the first example of paper money used ?",
            options: ["China", "Greece", "Turkey"],
            correctAnswer: "China"
        },
        {
            id: 9,
            question: "How long did dinosaurs live on the earth ?",
            options: ["100-150 million years", "150-200 million years", "200+ million years"],
            correctAnswer: "150-200 million years"
        },
        {
            id: 10,
            question: "Which of these was not a battle fought in World War II  ?",
            options: ["Anzio", "Okinawa", "Gettysburg"],
            correctAnswer: "Gettysburg"
        },
    ],
    Expert: [
        {
            id: 1,
            question: "Who sang the title for the latest Bond film, No Time to Die ?",
            options: ["Billie Eilish", "Sam Smith", "Adele"],
            correctAnswer: "Billie Eilish"
        },
        {
            id: 2,
            question: "If you were looking at Iguazu Falls, on what continent would you be ?",
            options: ["Asia", "Africa", "South America"],
            correctAnswer: "South America"
        },
        {
            id: 3,
            question: "What number was the Apollo mission that successfully put a man on the moon for the first time in human history ?",
            options: ["Apollo 11", "Apollo 13", "Apollo 12"],
            correctAnswer: "Apollo 11"
        },
        {
            id: 4,
            question: "Who was the lead singer of the band The Who?",
            options: ["Robert Plant", "Don Henley", "Roger Daltrey"],
            correctAnswer: "Roger Daltrey"
        },
        {
            id: 5,
            question: "What was the name of the Franco-British supersonic commercial plane that operated from 1976-2003?",
            options: ["Accord", "Concorde", "Mirage"],
            correctAnswer: "Concorde"
        },
        {
            id: 6,
            question: "Which Game of Thrones character is known as the Young Wolf?",
            options: ["Sansa Stark", "Robb Stark", "Arya Stark"],
            correctAnswer: "Robb Stark"
        },
        {
            id: 7,
            question: "How many plays do people (generally) believe that Shakespeare wrote?",
            options: ["27", "47", "37"],
            correctAnswer: "37"
        },
        {
            id: 8,
            question: "Who directed the Academy Award-winning movie, Gladiator?",
            options: ["Ridley Scott", "James Cameron", "Steven Soderbergh"],
            correctAnswer: "Ridley Scott"
        },
        {
            id: 9,
            question: "Which U.S. president was the first to appear on television?",
            options: ["Abraham Lincoln", "Richard Nixon", "Franklin D. Roosevelt"],
            correctAnswer: "Franklin D. Roosevelt"
        },
        {
            id: 10,
            question: "What is the capital of Tuvalu?",
            options: ["Lolua", "Asau", "Funafuti"],
            correctAnswer: "Funafuti"
        },
    ],
};

// this is current question
let currentQuestion = 1;
let usersScore = 0;
let failedQuestions = 0;

let scoreh3 = document.getElementById('score');
let questions = document.getElementsByName('question');
let questionLabelElements = document.querySelectorAll('div[data-name="label-option"]');


questionLabelElements.forEach(question => {

    // i want to loop through all the questions
    question.addEventListener('click', getOptionAndNextQuestion);
});


// when a user selects an option i want to get the option
// the user selected and go to the next question
function getOptionAndNextQuestion(event) {

    let optionUserClicked = event.target.innerText;

    if (optionUserClicked == arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].correctAnswer) {
        scoreh3.innerHTML = parseInt(scoreh3.innerHTML) + 1;
        usersScore = parseInt(scoreh3.innerHTML);

        let currentQuestionSpan = document.getElementById("current-question");
        currentQuestionSpan.innerText = currentQuestion + 1;
        ++currentQuestion;

        if (currentQuestion > 10) {
            showUsersScore();
        }
        else {
            nextQuestion();
        }
        
    }
    else {
        ++failedQuestions;

        let failedQuestionSpan = document.getElementById('failed');
        failedQuestionSpan.innerText = failedQuestions;

        let currentQuestionSpan = document.getElementById("current-question");
        currentQuestionSpan.innerText = currentQuestion + 1;
        ++currentQuestion;

        // check if there is no next question
        if (currentQuestion > 10) {
            showUsersScore();
        }
        else {
            nextQuestion();
        }
    }
}

// this function is for end of the quiz section
// this function will run when the user has finished the quiz
function showUsersScore() {
    let quizSections = document.getElementsByClassName('sections');

    quizSections[2].classList.remove('show');
    quizSections[2].classList.add('hide');
    quizSections[3].classList.remove('hide');
    quizSections[3].classList.add('show');

    let scoreMessage = document.getElementById('congratulate-message');
    let userElement = document.getElementById('congratulate-user');
    let userFinalScoreElement = document.getElementById('final-score');

    if (usersScore < 4) {
        scoreMessage.innerText = "Done! Try Again ";
    }
    else if (usersScore < 6) {
        scoreMessage.innerText = "Good Job ! Try Again ";
    }
    else if (usersScore < 9) {
        scoreMessage.innerText = "Nice work ! Try Again ";
    }
    else {
        scoreMessage.innerText = "Congratulations! Great Score ";
    }

    userElement.innerText = usersName;
    userFinalScoreElement.innerText = usersScore;

    let noButton = document.getElementById('play-again');
    noButton.addEventListener('click', takeUserToBeginning);
    let yesButton = document.getElementById('yes');

    // add event listener so that when the user clicks the button
    // it will take them to the choose level page
    yesButton.addEventListener('click', takeUserToChooseLevel);
}

// this will take the user to the choose level page
function takeUserToChooseLevel() {
    currentQuestion = 1;
    usersScore = 0;
    failedQuestions = 0;

    let currentQuestionSpan = document.getElementById("current-question");
    currentQuestionSpan.innerText = 1;
    scoreh3.innerHTML = usersScore;

    let failedQuestionSpan = document.getElementById('failed');
    failedQuestionSpan.innerText = failedQuestions;

    usersName = inputElement.value;
    let userh3 = document.getElementById('user');
    userh3.innerText = `Welcome ${usersName}`;

    // get all quiz sections
    let quizSections = document.getElementsByClassName('sections');
    quizSections[3].classList.add('hide');
    quizSections[1].classList.remove('hide');
    quizSections[1].classList.add('show');
}

function takeUserToBeginning() {
    currentQuestion = 1;
    usersScore = 0;
    failedQuestions = 0;

    let currentQuestionSpan = document.getElementById("current-question");
    currentQuestionSpan.innerText = 1;
    scoreh3.innerHTML = usersScore;

   
    let failedQuestionSpan = document.getElementById('failed');
    failedQuestionSpan.innerText = failedQuestions;

    // get all quiz sections
    let quizSections = document.getElementsByClassName('sections');
    quizSections[3].classList.add('hide');
    quizSections[0].classList.remove('hide');
    quizSections[1].classList.add('show');
}

// This function will add to the score and go the next question
function nextQuestion() {
    
    let quizQuestionh3 = document.getElementById('quiz-question');
    let questionElements = document.getElementsByName('question');
    let questionLabelElements = document.getElementsByClassName('label');
    quizQuestionh3.innerHTML = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].question;

    // changing options and labels
    // loop through the current questions
    Array(...questionLabelElements).forEach((question, index) => {
        question.value = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].options[index];
        question.checked = false;

        questionLabelElements.item(index).textContent = arrayOfQuestions[`${choosenLevel}`][currentQuestion - 1].options[index];
    });
}