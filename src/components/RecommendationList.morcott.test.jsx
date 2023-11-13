import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RecommendationList from './RecommendationList';

// Mocking Firebase utilities if needed
vi.mock('../utilities/firebase', async () => {
    const actual = await vi.importActual('../utilities/firebase');
    return {
        ...actual,
        useAuthState: vi.fn(() => [{}, null]), // Mocking useAuthState
    };
});

describe('back to questionnaire button', () => {
    // Mock results array with the correct structure
    const res = [
        { pet: { Image: 'image1.jpg', Name: 'Pet 1', Breed: 'Breed 1', Activity: 4, Age: 5, Temperment: 3} },
        { pet: { Image: 'image1.jpg', Name: 'Pet 1', Breed: 'Breed 1', Activity: 4, Age: 5, Temperment: 3} }
    ];

    it('should navigate back to questionnaire', async () => {
        render(
            <MemoryRouter initialEntries={['/recommendations']}>
                <Routes>
                    <Route path="/recommendations" element={<RecommendationList results={res} />} />
                    <Route path="/questionnaire" element={<div>Questionnaire Page</div>} />
                </Routes>
            </MemoryRouter>
        );

        const backButton = screen.getByText("Back to Questionnaire");
        userEvent.click(backButton);

        // Check for navigation (mock useNavigate and verify it's called with the correct path)
    });
});
