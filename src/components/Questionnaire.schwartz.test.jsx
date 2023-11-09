import { describe, it, vi } from "vitest";
import useGetResults from "../utilities/getResults";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Questionnaire from './Questionnaire';
import { signInWithGoogle, useDbData } from '../utilities/firebase';
import { useState } from "react";
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

// vi.mock('../utilities/getResults.js', () => ({
//     useGetResults: vi.fn(() => [[], null])
// }));
vi.mock('../utilities/getResults.js');

// spy for useNavigate 
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('submitting questionnaire', () => {
    // vi.mock('../utilities/firebase');
    useGetResults.mockResolvedValue([[{pet: {}, score: 1}], null]);

    it('should navigate to recommendations', async () => {
        const mockSetResults = vi.fn();
        const mockNavigate = useNavigate();
        // signInWithGoogle.mockResolvedValue(true);
        render(
            <Router>
              <Questionnaire setResults={mockSetResults} />
            </Router>
        );
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/recommendations');
        });
    });
});