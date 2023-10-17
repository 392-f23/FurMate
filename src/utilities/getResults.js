const getResults = (selectedAnswers) => {
    petsData = []; // this needs to be worked out
    petScores = [];
    petScores = new Array(petsData.length).fill(null);
    petsData.map((item, i) => petScores[i] = {pet: item, score: 0});
    for (let i = 0; i < petsData.length; i++) {
        let petScore = 0;
        for (let j = 0; j < selectedAnswers.length; j++) {
            const petAttribute = petsData[i][j];
            const attributeAnswer = selectedAnswers[j];
            const attributeScore = Math.abs(attributeAnswer - petAttribute);
            petScore += attributeScore;
        }
        petScores[i].score = petScore;
    }

    /* petScores array is now populated with scores corresponding to the
    pets in petsData */
    /* Now we need to sort petsData such that it is in ascending order
    according to the scores in petScores */

    petScores.sort((a, b) => (
        a.score < b.score ? -1 : a.score > b.score ? 1 : 0
    ));

    return petScores;
}