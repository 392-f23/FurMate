import { describe, it } from "vitest";
import { getSortedResults } from "../utilities/getResults";


describe('getting results', () => {
  const mockData = [{Stats: [1,0,2]},{Stats: [3,1,3]}];
  const expectedOut = [{pet: {Stats: [3,1,3]}, score: 1},{pet: {Stats: [1,0,2]}, score: 3}];

  it('should score and sort pets correctly', async () => {

    const petScores = getSortedResults(mockData, [3,0,3]);

    petScores.forEach((pet, i) => {
      expect(pet.score).to.equal(expectedOut[i].score);
      for(let j = 0; j < pet.pet.Stats.length; j++) {
        expect(pet.pet.Stats[j]).to.equal(expectedOut[i].pet.Stats[j]);
      }
    });
  });
});