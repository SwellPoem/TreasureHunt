// ALERT FOR SUPPORT
document.querySelector('.support-button').addEventListener('click', function() {
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('hidden');
});

// Get all the option divs
var options = document.getElementsByClassName('option');

// Get the button
var button = document.querySelector('.confirm-button');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Get all the radio buttons
    var radioButtons = document.querySelectorAll('.option-child');

    // Loop through each radio button
    for (var i = 0; i < radioButtons.length; i++) {
        // If this radio button is checked
        if (radioButtons[i].checked) {
            // Call the checkAnswer function, passing the value of the radio button
            console.log(radioButtons[i]);
            checkAnswer(radioButtons[i].value);
            break;
        }
    }
});

// Loop through each option div
for (var i = 0; i < options.length; i++) {
    // Add a click event listener to the option div
    options[i].addEventListener('click', function() {
        // Get the radio button inside this option div
        var radioButton = this.querySelector('.option-child');

        // Check the radio button
        radioButton.checked = true;
    });
}

const questionsMap = {
    1: "Prima domanda: Quante birre ci sono in totale?",
    2: "Seconda domanda: Quante birre sono state aggiunte?",
    3: "Terza domanda: Quante birre sono state tolte?",
    4: "Quarta domanda: Quante birre sono rimaste?"
}

const answersMap = {
    1: ["uno", "due", "tre", "quattro"],
    2: ["cinque", "sei", "sette", "otto"],
    3: ["nove", "dieci", "undici", "dodici"],
    4: ["tredici", "quattordici", "quindici", "sedici"]
}

const correctAnswers = {
    1: "quattro",
    2: "otto",
    3: "dieci",
    4: "quattordici"
}

var currentQuestion = 1;

function loadQuestion() {
    document.getElementById('question-text').innerText = questionsMap[currentQuestion];
    var answers = answersMap[currentQuestion];
    // associate each answer to a "answer-text" element
    var answersDOM = document.getElementsByClassName('answer-text');
    var radioDOMs = document.getElementsByClassName('option-child');
    for (var i = 0; i < answersDOM.length; i++) {
        answersDOM[i].innerText = answers[i];
        radioDOMs[i].value = answers[i];
    }

    document.getElementById('answer-text').innerHTML = answersHtml;
}

function checkAnswer(answer) {
    console.log(answer);
    if (answer === correctAnswers[currentQuestion]) {
        currentQuestion++;
        if (currentQuestion > 4) {
            document.getElementById('curtain').classList.add('hidden');
        } else {
            loadQuestion();
        }
    } else {
        alert("Risposta sbagliata, riprova!");
    }
}

loadQuestion();