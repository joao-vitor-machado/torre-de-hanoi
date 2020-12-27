
function defineNumberOfMoves(numberOfDiscs) {
    var numPlays;

    numPlays = Math.pow(2, numberOfDiscs) - 1;
    return numPlays;
}

function moveDisc (fromStem, toStem){
    console.log('Movendo disco de ' + fromStem + ' para ' + toStem);
}

var numeroPlays = 0;

function solveGameProblem(height, fromStem, toStem, withStem) {

   

     if(height >= 1){
         solveGameProblem(height-1, fromStem, withStem, toStem);    
         numeroPlays++;
         moveDisc(fromStem, toStem);
         solveGameProblem(height-1, withStem, toStem, fromStem);
     }

}

export {solveGameProblem, defineNumberOfMoves}