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
            // console.log(radioButtons[i]);
            checkAnswer(radioButtons[i]);
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
    1: "Quale cereale è comunemente utilizzato nella produzione di bevande fermentate?",
    2: "Quale parte dell'orzo viene utilizzata per produrre il malto?",
    3: "In che processo biologico gli zuccheri vengono convertiti in alcol ed anidride carbonica?",
    4: "Quale enzima presente nel malto è essenziale per la successiva conversione degli zuccheri in alcol durante la fermentazione?",
    5: "Qual è il nome della sostanza chimica prodotta durante la fermentazione alcolica?",
    6: "Qual è il tipo principale di fermentazione utilizzato nella produzione della birra?",
    7: "Qual è il nome del processo di aggiunta del luppolo durante l'ebollizione del mosto?",
    8: "Qual è il nome del birrificio più antico in Irlanda, fondato nel 1759?",
    9: "Qual è il nome della famosa birra <u>rossa</u> irlandese?",
    10: "Qual è il tipo di bicchiere tradizionalmente usato per la birra Weiss?"
}

const answersMap = {
    1: ["Grano", "Orzo", "Riso", "Mais"],
    2: ["Germoglio", "Radice", "Fusto", "Foglia"],
    3: ["Fotosintesi", "Respirazione cellulare", "Traspirazione", "Fermentazione"],
    4: ["Proteasi", "Lipasi", "Amilasi", "Cellulasi"],
    5: ["Etanolo", "Etere", "Aldeide", "Metano"],
    6: ["Arobica", "Alcolica", "Lattica", "Acetica"],
    7: ["Hopping", "Whirpooling", "Dry-Hopping", "Bittering"],
    8: ["Guinness", "Murphy's", "Smithwick's", "Kilkenny"],
    9: ["Murphy's", "Kilkenny", "Guinness", "Smithwick's"],
    10: ["Pinta", "Weissbier", "Coppa", "Flute"]
}

const correctAnswers = {
    1: "Orzo",
    2: "Germoglio",
    3: "Fermentazione",
    4: "Amilasi",
    5: "Etanolo",
    6: "Alcolica",
    7: "Dry-Hopping",
    8: "Guinness",
    9: "Smithwick's",
    10: "Weissbier"
}

var currentQuestion = 1;

function loadQuestion() {
    document.getElementById('question-text').innerHTML = questionsMap[currentQuestion];
    var answers = answersMap[currentQuestion];
    // associate each answer to a "answer-text" element
    var answersDOM = document.getElementsByClassName('answer-text');
    var radioDOMs = document.getElementsByClassName('option-child');
    for (var i = 0; i < answersDOM.length; i++) {
        answersDOM[i].innerText = answers[i];
        radioDOMs[i].value = answers[i];
        radioDOMs[i].checked = false;
    }

    document.getElementById('answer-text').innerHTML = answersHtml;
}

function checkAnswer(element) {
    var answer = element.value;
    if (answer === correctAnswers[currentQuestion]) {
        currentQuestion++;
        if (currentQuestion > Object.keys(correctAnswers).length) {
            showSuccessCurtain();
        } else {
            loadQuestion();
        }
    } else {
        var option = element.parentElement;
        option.style.animation = 'shake 0.5s';
        option.style.animationIterationCount = '1';

        option.addEventListener('animationend', () => {
            option.style.animation = '';
        });
    }
}

function showSuccessCurtain() {
    var successCurtain = document.getElementById('successCurtain');
    successCurtain.classList.remove('hidden');
}

loadQuestion();