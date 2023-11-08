import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RecommendationList from './RecommendationList';

describe('back to questionnaire button', () => {
    const res = [0, 1, 0, 1, 0];
    it('should navigate back to questionnaire', () => {
        render(<RecommendationList results = {res} />)
    })
});