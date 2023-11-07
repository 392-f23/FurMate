import { render, fireEvent, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('NavBar Component', () => {
  it('navigates to the correct page when a link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<NavBar open={true} onClose={jest.fn()} />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Questionnaire'));
  });
});