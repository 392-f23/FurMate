import animals from '../components/animals';

export const getResults = (selectedAnswers) => {
    let petsData = animals;
    let petScores = [];
    petScores = new Array(petsData.length).fill(null);
    petsData.map((item, i) => petScores[i] = {pet: item, score: 0});
    for (let i = 0; i < petsData.length; i++) {
        // let petScore = 0;
        for (let j = 0; j < selectedAnswers.length; j++) {
            // const petAttribute = petsData[i].Stats[j];
            // const attributeAnswer = selectedAnswers[j];
            // const attributeScore = Math.abs(attributeAnswer - petAttribute);
            petScores[i].score += Math.abs(selectedAnswers[j] - petsData[i].Stats[j]);
        }
        // petScores[i].score = petScore;
    }

    console.log('Ready to sort: ', petScores);

    /* petScores array is now populated with scores paired with the
    pets in petsData */
    /* Now we need to sort petScores so that it is in ascending order
    according to the scores */

    petScores.sort((a, b) => (
        a.score < b.score ? -1 : a.score > b.score ? 1 : 0
    ));

    console.log('Sorted: ', petScores);

    return petScores;

}