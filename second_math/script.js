const hintsMap = {
    'numberHolder1': 'Ilaria e Silvia stanno pianificando di vendere limonata e biscotti alla prossima festa dei bambini del doposcuola. Silvia ha notato che, vendendo 4 bicchieri di limonata e 2 pacchetti di biscotti, ha incassato 330 euro in un giorno. Minchia che bimbi ricchi! Datemeli a me sti soldi invece di spenderli in limonata e biscottini! Ilaria, che vendeva solo bicchieri di limonata al doppio del prezzo dei biscotti, ha incassato 207 euro in un giorno, vendendo un certo numero di bicchieri di limonata e il doppio dei pacchetti di biscotti rispetto ai bicchieri di limonata. Che business signori! Quanto se le facevano pagare, ‘ste sporche capitaliste, ogni singolo pacco di biscotti e bicchiere di limonata? Spoiler: un botto, ma è un problema di matematica per una caccia al tesoro, non fatevi troppe domande, deve solo sembrare un casino.',
    'numberHolder2': 'In una sfida alla Cube Challenge, si sono scontrate due squadre, i Belli Piselli e le Belle Piskelle. Ogni sfida superata dei Piselli porta 2 punti, mentre ogni prova fallita toglie 3 punti (per quale motivo?). Le Piskelle, invece, ottengono un punto per ogni sfida superata e vedono tolti 2 punti per ogni sfida fallita (che cosa strana… bah!). Alla fine della gara, è stato rivelato che il punteggio finale dei Piselli era di 58 punti, mentre le Piskelle ne avevano accumulati solo 23. Ecco il motivo per cui le Piskelle hanno perso: un metodo di calcolo del punteggio assolutamente cervellotico e, onestamente, poco sensato. Ma che vuoi farci, gli indizi per una caccia al tesoro devono essere difficili. Ma quindi, alla fine… quante sfide sono state superate e quante fallite?',
    'numberHolder3': 'Il caro maestro Gabriele ha deciso di espandere la sua attività di maestro di scuola di ciclismo, espandendo il business lateralmente: perchè non includere, oltre ai bicicli, monocicli e tricicli? Che idea! Contattando il suo fornitore, questi gli dice che nel suo magazzino ci sono in totale 62 fra tricicli e monocicli, e che il numero totale di copertoni per poter equipaggiare correttamente il suo nuovo arsenale è di 83 unità. Quanti monocicli e tricicli ha Gabriele nel suo nuovo magazzino?',
    'numberHolder4': 'Manuel, grazie ai suoi amici che adorano prendersi gioco di lui, festeggia un compleanno quasi ogni mese! All’ennesima celebrazione randomica, Manuel è impazzito, e ha deciso di calcolare quante volte ha reagito in modo carino e quante in modo incazzato, con un sistema di punteggio cervellotico (ma è anche l’ultimo problema del set, quindi non rompete le palle): Manuel guadagna punti ogni volta che risponde con umorismo alle finte celebrazioni e ne perde ogni volta che non l’ha presa bene. Facendo dei film mentali assurdi, si è scoperto che Manuel ha totalizzato 46 punti meno di quanto sarebbe stato se avesse riso ogni volta, invece di dire AOOO. Inoltre, quando ha provato a raddoppiare le volte in cui se l’è presa bene e a sottrarre le volte che ha detto AOOO, si è scoperto un deficit di 9 punti. Che rosicone. Quante volte ha riso Manuel, e quante se l’è presa a male? P.S.: Si, lo sappiamo, questa è difficile. P.P.S.: Tanti auguri, Manuel. P.P.P.S.: Qualunque sia stata la tua reazione, non fa parte del conteggio del problema.',
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