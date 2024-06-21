const hintsMap = {
    'numberHolder1': 
        '<p>Ilaria e Silvia stanno pianificando di vendere limonata e biscotti alla prossima festa dei bambini del doposcuola. <br><br> ' +
        'Silvia ha notato che, vendendo 4 bicchieri di limonata e 2 pacchetti di biscotti, ha incassato 330 euro in un giorno. <i>Mortacci che bimbi ricchi!</i> Datemeli a me sti soldi invece di spenderli in limonata e biscottini! <br><br>' +
        'Ilaria, che vendeva bicchieri di limonata al doppio del prezzo dei biscotti, ha incassato 207 euro in un giorno, vendendo un certo numero di bicchieri di limonata e il doppio dei pacchetti di biscotti rispetto ai bicchieri di limonata. <i>Che business signori!</i> <br><br>'+
        'Quanto se le facevano pagare, ‘ste sporche capitaliste, ogni singolo pacco di biscotti e bicchiere di limonata? Spoiler: un botto, ma è un problema di matematica per una caccia al tesoro, non fatevi troppe domande, deve solo sembrare un casino.</p>',
    'numberHolder2': 
        'Il caro maestro Gabriele ha deciso di espandere la sua attività di maestro di scuola di ciclismo, espandendo il business lateralmente: perchè non includere, oltre ai bicicli, monocicli e tricicli? Che idea! Contattando il suo fornitore, questi gli dice che nel suo magazzino ci sono in totale 59 fra tricicli e monocicli, '+ 
        'e che il numero totale di copertoni per poter equipaggiare correttamente il suo nuovo arsenale è di 153 unità. Quanti tricicli e monocicli ha Gabriele nel suo nuovo magazzino?',
    'numberHolder3': 
        '<p>Manuel, grazie ai suoi amici che adorano prendersi gioco di lui, festeggia un compleanno quasi ogni mese! <br><br>' +
        'All’ennesima celebrazione randomica, Manuel è impazzito, e ha deciso di calcolare quante volte ha reagito in modo carino e quante in modo incazzato, con un sistema di punteggio cervellotico <i>(ma è anche l’ultimo problema del set, quindi non rompete le palle)</i>: <br> ' +
        'Manuel guadagna punti ogni volta che risponde con umorismo alle finte celebrazioni e ne perde ogni volta che non l’ha presa bene. Facendo dei film mentali assurdi, si è scoperto che Manuel ha totalizzato 13 punti meno di quanto sarebbe stato se avesse riso ogni volta, invece di dire AOOO. Inoltre, quando ha provato a raddoppiare le volte in cui se l’è presa bene e a sottrarre le volte che ha detto AOOO, si è scoperto un deficit di 63 punti. <i>Che rosicone</i>. Quante volte ha riso Manuel, e quante se l’è presa a male? <br><br><br> '+
        'P.S.: Si, lo sappiamo, questa è difficile. <br> P.P.S.: Tanti auguri, Manuel. <br> P.P.P.S.: Qualunque sia stata la tua reazione, non fa parte del conteggio del problema.</p>',
}

const suggerimentiMap = {
    'numberHolder1': "Va bene... Ma solo per questa volta! <br><br> 4x + 2y = 330 <br> x + 2y = 207",
    'numberHolder2': "Questa è per facilitarvi un po'la vita... <br><br> x + y = 59 <br> 3x + y = 153",
    'numberHolder3': "Vi capiamo, siete stanchi... <br><br> x - y = 13 <br> 2x - y = 63"
}

const solutionsArray = [41, 83, 47, 12, 50, 37]
const finalTextArray = ["41 . ", "83", "47 N", "12 . ", "50", "37 E"]

const targetPositionsArray = [
    {top: 120.5, left: 16.65625},
    {top: 120.5, left: 142.984375},
    {top: 120.5, left: 269.3125},
    {top: 310.5, left: 16.65625},
    {top: 310.5, left: 142.984375},
    {top: 310.5, left: 269.3125}
]

var isClicked = false;
var doAnimate = true;

//  Get all the numberholder divs
var numberHolders = document.querySelectorAll('.numberholder-parent');

function loadEquationPage(event_target) {
    console.log(event_target.target.id);

    isClicked = !isClicked;

    if (isClicked) {

        // Hide all the other numberholders and their children except the one clicked
        for (holder of numberHolders) {
            if (holder.id != event_target.target.id) {
                holder.style.display = 'none';
            }
        }

        //make the holder sticky
        event_target.target.style.position = 'sticky';

        // Load the equation page
        var equationPage = document.createElement('div');
        equationPage.id = 'equationPage';
        console.log(event_target.target.id)
        equationPage.innerHTML = '<div class="hint-text"> '+ hintsMap[event_target.target.id.split("[0-9]")[0]] + '</div>';
        document.body.appendChild(equationPage);

        // Insert text into hints-curtain text
        var hintsCurtainText = document.getElementById('curtain-hint-content');
        hintsCurtainText.innerHTML = suggerimentiMap[event_target.target.id];


    } else {
        // Remove the equation page
        document.getElementById('equationPage').remove();
        // Restore the other elements that have been hidden
        for (holder of numberHolders) {
            holder.style.display = 'block';
        }

    }
    var hintsButton = document.getElementById('hints-button')
    hintsButton.classList.toggle('hidden');

}

function checkSolution() {
    // Get all inputs values and store them in an array
    var inputs = document.querySelectorAll('input');
    var inputsArray = [];
    for (input of inputs) {
        inputsArray.push(parseInt(input.value));
    }

    if (inputsArray.toString() === solutionsArray.toString()) {
        // translate each of the inputs smoothly to the position as described in the targetPositionsArray
        if (doAnimate) {
            for (i = 0; i < inputs.length; i++) {
                // translate it to the bottom of the body first
                // inputs[i].style.top = '100vh';

                document.body.appendChild(inputs[i]);
                void inputs[i].offsetWidth;
                inputs[i].style.position = 'absolute';
                inputs[i].style.transition = 'all 3s ease';
                inputs[i].style.top = `${targetPositionsArray[i].top}px`;
                inputs[i].style.width = '100px';
                inputs[i].style.left = `calc(${targetPositionsArray[i].left}px + 8%)`;
                // inputs[i].style.borderImage='url("https://www.unicefusa.org/sites/default/files/answer-box.png") 0';
                inputs[i].type = 'text';
                inputs[i].value = finalTextArray[i];
            }


            // get all numberholder-parents
            var numberHolders = document.querySelectorAll('.numberholder-parent');
            // hide them
            for (holder of numberHolders) {
                holder.style.display = 'none';
            }

            doAnimate = false;
        }
    } else {
        // abbassa la curtain
        document.getElementById('curtain-risolto').classList.toggle('hidden');
        var curtainText = document.getElementById('curtain-risolto-content');
        // count the non-empty inputs in inputsArray
        const count = inputsArray.reduce((count, input) => input ? count + 1 : count, 0);
        
        if (count === 0) {
            curtainText.innerHTML = 'Non hai inserito nessun valore! <br> Riprova!';
            return;
        } else {
            var wrongInputs = 0
            for (i = 0; i < inputsArray.length; i++) {
                if (inputsArray[i] !== solutionsArray[i]) {
                    wrongInputs++;
                }
            }
            curtainText.innerHTML = `Hai sbagliato <b>${wrongInputs}</b> risposte! <br> Controlla bene...`;
        }

        
        
    }
}

// ALERT FOR SUPPORT
document.querySelector('.support-button').addEventListener('click', function() {
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('hidden');
});

document.querySelector('.hints-button').addEventListener('click', function() {
    var curtain = document.getElementById('curtain-hint');
    curtain.classList.toggle('hidden');
});