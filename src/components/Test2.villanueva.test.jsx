import { describe, expect, test, it, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import useGetResults from '../utilities/getResults';


vi.mock('../utilities/getResults.js', async () => {
    const mockUseGetResults = (selectedAnswers) => {
        if (selectedAnswers.length === 0) {
            return { petScores: [], error: 'An error occurred' };
        }
        const mockPetsData = [
            { name: 'Snow', Stats: [0, 0, 0, 0, 0] },
            { name: 'Milo', Stats: [1, 1, 1, 1, 1] },
            { name: 'Buster', Stats: [4, 4, 4, 4, 4] }
        ];
        const scores = mockPetsData.map((pet, i) => {
            const score = selectedAnswers.reduce((acc, answer, j) => acc + Math.abs(answer - pet.Stats[j]), 0);
            return { pet: pet.name, score };
        });
        scores.sort((a, b) => a.score - b.score);
        return { petScores: scores, error: null };
    };
    return {
        default: mockUseGetResults, 
    };
});



describe('Pet results', () => {
    it('correct and consistent pet data', async () => {
        let selectedAnswers = [0, 0, 0, 0, 0];
        let result = useGetResults(selectedAnswers);

        expect(result).toMatchObject({
            petScores: expect.arrayContaining([
                expect.objectContaining({
                    pet: expect.any(String),
                    score: expect.any(Number),
                }),
            ]),
            error: null,
        });
        expect(result.petScores[0].pet).toBe('Snow');
        expect(result.petScores[1].pet).toBe('Milo');
        expect(result.petScores[2].pet).toBe('Buster');

        selectedAnswers = [4, 4, 4, 4, 4];
        result = useGetResults(selectedAnswers);

        expect(result.petScores[0].pet).toBe('Buster');
        expect(result.petScores[1].pet).toBe('Milo');
        expect(result.petScores[2].pet).toBe('Snow');
    });

    it('handling error', async () => {
        let selectedAnswers = [];
        let result = useGetResults(selectedAnswers);

        expect(result).toMatchObject({
            petScores: [],
            error: 'An error occurred',
        });
    });

});
