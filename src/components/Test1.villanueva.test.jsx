import { describe, expect, test, it, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import GoogleLogin from './Login';
import Questionnaire from './Questionnaire';
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { waitFor } from '@testing-library/react';


vi.mock('../utilities/firebase', async () => {
    const actual = await vi.importActual('../utilities/firebase');
    return {
        ...actual, 
        signInWithGoogle: vi.fn(() => Promise.resolve({ user: { uid: '12345', email: 'test@example.com' } })),
        useAuthState: vi.fn(() => [{ uid: '12345', email: 'test@example.com' }, null]),
        useDbData: vi.fn(() => []),
    };
});

// spy for useNavigate 
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});


describe('Login and navigation', () => {
    it('renders the questionnaire after successful login', async () => {
        const mockSetResults = vi.fn();
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<GoogleLogin />} />
                    <Route path="/questionnaire" element={<Questionnaire setResults={mockSetResults}/>} />
                </Routes>
            </MemoryRouter>
        );

        const loginButton = screen.getByTestId('login-button');
        fireEvent.click(loginButton);

        //confirm  succesful navigation to questionnaire
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/questionnaire');
        });

        //no actual navigation, so render questionnaire
        render(<Questionnaire setResults={mockSetResults} />);
        await screen.findByText("Are you an active or sedentary person?");
    });
});
