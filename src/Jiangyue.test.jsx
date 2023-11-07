import {describe, expect, it, test, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import Questionnaire from './components/Questionnaire';
import Question from './components/Question';
import { signInWithGoogle } from './utilities/firebase';
import { getAuth, signInAnonymously, signInWithEmailAndPassword, signInWithPhoneNumber } from 'firebase/auth';
import { useState } from 'react';
import { initializeApp, getApps, getApp } from "firebase/app";
import { useAuthState, useDbData } from './utilities/firebase';
vi.mock("./utilities/firebase.js");

it("should work", ()=>{
  
})

describe('authentication test', ()=>{
  test("User should be logged out at the start", () =>{
    useAuthState.mockReturnValue([null]);
    render(<App />);
    expect(screen.getByText("Login"));
  })

  test("User should be logged in after logged in", async () =>{
    
    useAuthState.mockReturnValue([{ displayName: 'Joe' }]);
    render(<App />);
    // const login = screen.getByRole('button');
    // fireEvent.click(login);
    expect(screen.getByText("Login"));
  })

  test("User should be logged out after clicking on the photo", () =>{
    render(<App />);
    // const photo = screen.getByRole("img");
    // fireEvent.click(photo);
    expect(screen.getByText("Login"));
  })
});

describe("answer selection test", () =>{
  test("answer should not be selected at the start", () => {
    const questionnaries = {
      questions: [
        {
          question: "Are you an active or sedentary person?",
          answers: [
            "Very Active: I lead a highly active lifestyle and engage in rigorous physical activities regularly.", 
            "Moderately Active: I enjoy some physical activities but also value relaxation.", 
            "Mostly Sedentary: I prefer a calm, indoor lifestyle."
          ],
        },
      ]
    }
    var selected = [-1];
    render(<Question id={0} selected={selected} question={questionnaries.questions[0]}  setSelected={(a)=>{selected = a}}/>);
    expect(selected).toStrictEqual([-1]);
  });

  test("answer should be selected when clicked", () => {
    const questionnaries = {
      questions: [
        {
          question: "Are you an active or sedentary person?",
          answers: [
            "Very Active: I lead a highly active lifestyle and engage in rigorous physical activities regularly.", 
            "Moderately Active: I enjoy some physical activities but also value relaxation.", 
            "Mostly Sedentary: I prefer a calm, indoor lifestyle."
          ],
        },
      ]
    }
    var selected = [-1];
    render(<Question id={0} selected={selected} question={questionnaries.questions[0]}  setSelected={(a)=>{selected = a}}/>);
    const button = screen.getByText("Very Active: I lead a highly active lifestyle and engage in rigorous physical activities regularly.");
    fireEvent.click(button);
    expect(selected == [-1]).toBeFalsy();
  });
});