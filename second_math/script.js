const hintsMap = {
    'numberHolder1': 
        '<p>Ilaria e Silvia stanno pianificando di vendere limonata e biscotti alla prossima festa dei bambini del doposcuola. <br><br> ' +
        'Silvia ha notato che, vendendo 4 bicchieri di limonata e 2 pacchetti di biscotti, ha incassato 330 euro in un giorno. <i>Mortacci che bimbi ricchi!</i> Datemeli a me sti soldi invece di spenderli in limonata e biscottini! <br><br>' +
        'Ilaria, che vendeva solo bicchieri di limonata al doppio del prezzo dei biscotti, ha incassato 207 euro in un giorno, vendendo un certo numero di bicchieri di limonata e il doppio dei pacchetti di biscotti rispetto ai bicchieri di limonata. <i>Che business signori!</i> <br><br>'+
        'Quanto se le facevano pagare, ‘ste sporche capitaliste, ogni singolo pacco di biscotti e bicchiere di limonata? Spoiler: un botto, ma è un problema di matematica per una caccia al tesoro, non fatevi troppe domande, deve solo sembrare un casino.</p>',
    'numberHolder2': 
        'Il caro maestro Gabriele ha deciso di espandere la sua attività di maestro di scuola di ciclismo, espandendo il business lateralmente: perchè non includere, oltre ai bicicli, monocicli e tricicli? Che idea! Contattando il suo fornitore, questi gli dice che nel suo magazzino ci sono in totale 59 fra tricicli e monocicli, e che il numero totale di copertoni per poter equipaggiare correttamente il suo nuovo arsenale è di 153 unità. Quanti monocicli e tricicli ha Gabriele nel suo nuovo magazzino?',
    'numberHolder3': 
        '<p>Manuel, grazie ai suoi amici che adorano prendersi gioco di lui, festeggia un compleanno quasi ogni mese! <br><br>' +
        'All’ennesima celebrazione randomica, Manuel è impazzito, e ha deciso di calcolare quante volte ha reagito in modo carino e quante in modo incazzato, con un sistema di punteggio cervellotico <i>(ma è anche l’ultimo problema del set, quindi non rompete le palle)</i>: <br> ' +
        'Manuel guadagna punti ogni volta che risponde con umorismo alle finte celebrazioni e ne perde ogni volta che non l’ha presa bene. Facendo dei film mentali assurdi, si è scoperto che Manuel ha totalizzato 13 punti meno di quanto sarebbe stato se avesse riso ogni volta, invece di dire AOOO. Inoltre, quando ha provato a raddoppiare le volte in cui se l’è presa bene e a sottrarre le volte che ha detto AOOO, si è scoperto un deficit di 63 punti. <i>Che rosicone</i>. Quante volte ha riso Manuel, e quante se l’è presa a male? <br><br><br> '+
        'P.S.: Si, lo sappiamo, questa è difficile. <br> P.P.S.: Tanti auguri, Manuel. <br> P.P.P.S.: Qualunque sia stata la tua reazione, non fa parte del conteggio del problema.</p>',
}

var isClicked = false;

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
    } else {
        // Remove the equation page
        document.getElementById('equationPage').remove();
        // Restore the other elements that have been hidden
        for (holder of numberHolders) {
            holder.style.display = 'block';
        }
    }

}

// ALERT FOR SUPPORT
document.querySelector('.support-button').addEventListener('click', function() {
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('hidden');
});