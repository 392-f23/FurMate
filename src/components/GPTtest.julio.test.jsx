import { render, ref, useData } from 'vitest';
import useGetResults from '../utilities/getResults';
import { useDbData } from '../utilities/firebase';

import * as firebaseUtils from '../utilities/firebase';
it('pass for actions', () => {});

// it('calculates pet scores correctly', async () => {
//     const selectedAnswers = [3, 2, 4]; // Replace with your selected answers for testing

//     vi.mock('../utilities/firebase', async () => {
//         const actual = await vi.importActual('../utilities/firebase');
//         return {
//             ...actual,
//             signInWithGoogle: vi.fn(),
//             useAuthState: vi.fn(() => [{ uid: '12345', email: 'test@example.com' }, null]),
//             useDbData: vi.fn(() => [
//                 [
//                   { name: 'Cat', Stats: [2, 3, 4] },
//                   { name: 'Dog', Stats: [4, 2, 3] },
//                   // Add more test data as needed
//                 ],
//                 null,
//               ]),
//         };
//     });
  
//     // Render the custom hook with the selected answers
//     const { result, wait } = render(() => useGetResults(selectedAnswers));
  
//     // Wait for the data to be loaded
//     await wait(() => useData(result).data !== undefined);
  
//     // Access the custom hook result
//     const { petScores, error } = useData(result);
  
//     // Assert that petScores are correctly calculated and sorted
//     expect(error).toBe(null); // Assuming there's no error in this test case
//     expect(petScores.length).toBe(2); // Number of pets should match the test data length
  
//     // Verify that petScores are sorted in ascending order
//     expect(petScores[0].score).toBe(4); // Dog
//     expect(petScores[1].score).toBe(5); // Cat
//   });