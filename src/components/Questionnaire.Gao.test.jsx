import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Questionnaire from './Questionnaire';
import { useNavigate } from 'react-router-dom';

const mockPetsData = [
  { name: 'Cat', Stats: [1, 2, 3] },
  { name: 'Dog', Stats: [2, 3, 4] },
];

jest.mock('/src/utilities/getResults.js', () => ({
  useDbData: jest.fn(() => [mockPetsData, null]),
}));

jest.mock('/src/utilities/getResults.js', () => ({
  useGetResults: jest.fn((selectedAnswers) => {
    let scores = mockPetsData.map((pet, i) => {
      let score = selectedAnswers.reduce((acc, answer, j) => acc + Math.abs(answer - pet.Stats[j]), 0);
      return { pet: pet.name, score };
    });
    scores.sort((a, b) => a.score - b.score);
    return { petScores: scores, error: null };
  }),
}));

describe('Questionnaire Component', () => {
  it('displays the same pet results when selecting the same answers', async () => {
    const mockSetResults = jest.fn();
    const mockNavigate = useNavigate();
    render(
      <Router>
        <Questionnaire setResults={mockSetResults} />
      </Router>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(mockSetResults).toHaveBeenCalledWith([
        { pet: 'Cat', score: expect.any(Number) },
        { pet: 'Dog', score: expect.any(Number) },
      ]);
      expect(mockNavigate).toHaveBeenCalledWith('/recommendations');
    });
  });
});
