import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from '../App'; // Adjust the import according to your project structure

describe('Questionnaire Page', () => {
  it('navigates to /recommendations when submit is clicked', async () => {
    // Render the component within the context of a memory router
    render(
      <MemoryRouter initialEntries={['/questionnaire']}>
        <Routes>
          <Route path="/questionnaire" element={<YourQuestionnaireComponent />} />
          <Route path="/recommendations" element={<YourRecommendationsComponent />} />
          {/* ... other routes ... */}
        </Routes>
      </MemoryRouter>
    );

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Click the submit button
    userEvent.click(submitButton);

    // Check if the URL changed to /recommendations
    // This assumes that the navigation actually changes the component rendered
    expect(screen.getByText(/some content of YourRecommendationsComponent/i)).toBeInTheDocument();
  });
});
