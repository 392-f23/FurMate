import { describe, it, vi } from "vitest";
import useGetResults from "../utilities/getResults";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Questionnaire from './Questionnaire';
import RecommendationList from "./RecommendationList";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

// vi.mock('../utilities/getResults.js', () => ({
//     useGetResults: vi.fn(() => [[], null])
// }));

vi.mock('../utilities/getResults.js');

describe('submitting questionnaire', () => {
    // vi.mock('../utilities/firebase');
    useGetResults.mockReturnValue({ petScores: true, error: null });

    it('should navigate to recommendations', async () => {
      const user = userEvent.setup()

      const mockSetResults = vi.fn();
      // signInWithGoogle.mockResolvedValue(true);
      // mockNavigate('/test path')

      render(
          <Router>
            <Routes>
                <Route path="/" element={ <Questionnaire setResults={mockSetResults} /> }></Route>
                <Route path="/recommendations" element={<RecommendationList className="content" results={[]} />}></Route>
            </Routes>
          </Router>
      );

      await user.click(screen.getByRole('button', { name: 'Submit' }));
      expect(screen.getByText(/Back to Questionnaire/)).toBeDefined();
  });
});
