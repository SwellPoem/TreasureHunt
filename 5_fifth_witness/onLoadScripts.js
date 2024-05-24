
export function resizePuzzle() {
    // Get the svg with ID "puzzle"
    var puzzle = document.getElementById("puzzle");

    puzzle.style.transform = "scale(2)";

    var parent = puzzle.parentElement;
    parent.style = [];
    parent.style.display = 'block'
    parent.style.marginLeft =  (216 + 40) + 'px'
    parent.style.marginTop = (216 + 165) + 'px'

    var path = window.location.pathname;
    var page = path.split("/").pop();
    var witness = page.split(".")[0];
    var pageNum = parseInt(witness.split("witness")[1]);
    

    var bgCols = ["#D34E24", "#563F1B", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
    var sqCols = ["#563F1B", "#D34E24", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];

    // for each children item of the svg, set the width and height to the aspect ratio
    for (var i = 0; i < puzzle.children.length; i++) {
        
        console.info("Resizing element " + puzzle.children[i]+ " which has width " + puzzle.children[i].getAttribute('width') + " and height " + puzzle.children[i].getAttribute('height'));

        if (puzzle.children[i].getAttribute('fill') === "#113833") {
            puzzle.children[i].setAttribute('fill', bgCols[pageNum]);
        } else if (puzzle.children[i].getAttribute('fill') === "#0A8") {
            puzzle.children[i].setAttribute('fill', sqCols[pageNum]);
        }
    }
}

