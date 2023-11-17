import { describe, it, vi } from "vitest";
import useGetResults from "../utilities/getResults";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Questionnaire from './Questionnaire';
import RecommendationList from "./RecommendationList";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { useDbData } from "../utilities/firebase";

vi.mock('../utilities/firebase.js');

describe('getting results', () => {
    const mockData = [{Stats: [1,0,2]},{Stats: [3,1,3]}];
    useDbData.mockReturnValue([ mockData, null ]);

    it('should score and sort pets correctly', async () => {
      const user = userEvent.setup();

      const {petScores, error} = useGetResults([3,0,3]);

      expect(petScores).to.equal([{pet: {Stats: [3,1,3]}, score: 1},{pet: {Stats: [1,0,2]}, score: 3}]);
  });
});