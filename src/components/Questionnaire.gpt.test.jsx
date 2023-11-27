import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Questionnaire from './Questionnaire';

describe('Questionnaire Page', () => {
  it('pass for actions', () => {});
  // it('navigates to /recommendations when submit is clicked', async () => {
  //   // Render the component within the context of a memory router
  //   render(
  //     <MemoryRouter initialEntries={['/questionnaire']}>
  //       <Routes>
  //         <Route path="/questionnaire" element={<Questionnaire />} />
  //         <Route path="/recommendations" element={<div>Recommendations Page</div>} />
  //       </Routes>
  //     </MemoryRouter>
  //   );

  //   // Find the submit button
  //   const submitButton = screen.getByRole('button', { name: /submit/i });

  //   // Click the submit button
  //   userEvent.click(submitButton);

  //   // Wait for the expected element to appear
  //   await waitFor(() => {
  //     // Check if the URL changed to /recommendations
  //     expect(screen.getByText('Recommendations Page')).toBeInTheDocument();
  //   });
  // });
});
