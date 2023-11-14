import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RecommendationList from './RecommendationList';
import Questionnaire from './Questionnaire'; // Ensure this is imported if needed

vi.mock('../utilities/firebase', async () => {
    const actual = await vi.importActual('../utilities/firebase');
    return {
        ...actual,
        useAuthState: vi.fn(() => [{}, null]),
    };
});

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('back to questionnaire button', () => {
    const res = [
        { pet: { Image: 'image1.jpg', Name: 'Pet 1', Breed: 'Breed 1', Activity: 4, Age: 5, Temperment: 3} },
        { pet: { Image: 'image1.jpg', Name: 'Pet 1', Breed: 'Breed 1', Activity: 4, Age: 5, Temperment: 3} }
    ];

    it('should navigate back to questionnaire', async () => {
        const mockSetResults = vi.fn();
        render(
            <MemoryRouter initialEntries={['/recommendations']}>
                <Routes>
                    <Route path="/recommendations" element={<RecommendationList results={res} />} />
                    <Route path="/questionnaire" element={<Questionnaire setResults={mockSetResults} />} />
                </Routes>
            </MemoryRouter>
        );

        const backButton = screen.getByRole('link', { name: /back to questionnaire/i });
        userEvent.click(backButton);

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/questionnaire');
        });
    });
});
