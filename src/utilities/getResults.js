import { useState, useEffect } from 'react';
import { useDbData } from './firebase';

const useGetResults = (selectedAnswers) => {
  const [data, error] = useDbData('/pets/');
  const [petScores, setPetScores] = useState([]);

  if (selectedAnswers.length === 0) {
    return { petScores: [], error: 'An error occurred' };
  }

  useEffect(() => {
    if (data) {
      let petsData = data;
      let scores = new Array(petsData.length).fill(null);
      petsData.map((item, i) => scores[i] = { pet: item, score: 0 });

      for (let i = 0; i < petsData.length; i++) {
        for (let j = 0; j < selectedAnswers.length; j++) {
          scores[i].score += Math.abs(selectedAnswers[j] - petsData[i].Stats[j]);
        }
      }

      //console.log('Ready to sort: ', scores);

      // Sorting the scores
      scores.sort((a, b) => (
        a.score < b.score ? -1 : a.score > b.score ? 1 : 0
      ));

      //console.log('Sorted: ', scores);

      setPetScores(scores);
    }
  }, [data, selectedAnswers]);

  return { petScores, error };
};

export default useGetResults;
