import { render, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('NavBar', () => {
  it('closes the nav bar when clicked outside', () => {
    const mockOnClose = jest.fn();
    const { getByTestId } = render(<NavBar open={true} onClose={mockOnClose} />);

    // Assuming you have a test id for the outside area or the entire nav component
    const outsideArea = getByTestId('outside-area');

    fireEvent.click(outsideArea);

    // Assert that onClose was called
    expect(mockOnClose).toHaveBeenCalled();
  });
});
