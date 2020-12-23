
function defineNumberOfMoves(numberOfDiscs) {
    var numPlays;

    numPlays = Math.pow(2, numberOfDiscs) - 1;
    return numPlays;
}

function moveDisc (fromStem, toStem){
    console.log('Movendo disco de ' + fromStem + ' para ' + toStem);
}


function solveGameProblem(height, fromStem, toStem, withStem) {
     if(height >= 1){
         solveGameProblem(height-1, fromStem, withStem, toStem);
         moveDisc(fromStem, toStem);
         solveGameProblem(height-1, withStem, toStem, fromStem);
     }
}

solveGameProblem(2, "A", "B", "C");
