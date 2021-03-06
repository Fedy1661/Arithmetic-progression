import React from 'react';
import { GENERATE_TEST, SELECT_ANSWER, NEXT_QUESTION } from './actions';
import {
  FormulaNthTerm,
  FormulaDifferenceFirst,
  FormulaDifferenceSecond,
  FormulaExplainsName,
  FormulaSumOfNFirstTermsFirst,
  FormulaSumOfNFirstTermsSecond
} from './components/Formulae';

const questions = [
  {
    question: 'Формула n-го члена а.п',
    variants: [<FormulaNthTerm />]
  },
  {
    question: 'Формула разности',
    variants: [<FormulaDifferenceFirst />, <FormulaDifferenceSecond />]
  },
  {
    question: 'Формула, объясняющая название а.п',
    variants: [<FormulaExplainsName />]
  },
  {
    question: 'Формула суммы n-первых членов',
    variants: [
      <FormulaSumOfNFirstTermsFirst />,
      <FormulaSumOfNFirstTermsSecond />
    ]
  }
];

const initialState = {
  test: [],
  rightAnswers: 0,
  actualQuestion: null,
  selectedAnswers: [],
  answers: []
};
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const stirArr = () => {
  return Math.random() - 0.5;
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GENERATE_TEST:
      let test = [];
      for (let i = 0; i < questions.length; i++) {
        let quetionIndex = i;
        let variantIndex = getRandomInt(questions[i].variants.length);
        let answers = [[questions[quetionIndex].variants[variantIndex], true]];
        let variants = [quetionIndex + variantIndex];
        while (answers.length !== 4) {
          quetionIndex = getRandomInt(questions.length);
          variantIndex = getRandomInt(questions[quetionIndex].variants.length);
          let question = questions[quetionIndex];
          let answer = [
            question.variants[variantIndex],
            question.question === questions[i].question ? true : false
          ];
          if (variants.indexOf(quetionIndex + variantIndex) === -1) {
            answers.push(answer);
            variants.push(quetionIndex + variantIndex);
          }
        }
        test.push({
          question: questions[i].question,
          variants: answers.sort(stirArr)
        });
      }
      return {
        ...state,
        rightAnswers: 0,
        actualQuestion: 0,
        test: test.sort(stirArr),
        answers: []
      };
    case SELECT_ANSWER:
      if (state.selectedAnswers.indexOf(payload) === -1) {
        return {
          ...state,
          selectedAnswers: [...state.selectedAnswers, payload]
        };
      } else {
        const idx = state.selectedAnswers.indexOf(payload);
        return {
          ...state,
          selectedAnswers: [
            ...state.selectedAnswers.slice(0, idx),
            ...state.selectedAnswers.slice(idx + 1)
          ]
        };
      }
    case NEXT_QUESTION:
      let win = state.selectedAnswers.length !== 0 ? 0 : false;
      let countTrueAnswersInTest = 0;
      state.test[state.actualQuestion].variants.map(value => {
        return (countTrueAnswersInTest += value[1]);
      });
      for (let value of state.selectedAnswers) {
        if (state.test[state.actualQuestion].variants[value][1]) {
          win += 1;
        } else {
          win = false;
          break;
        }
      }
      if (win !== countTrueAnswersInTest) {
        win = false;
      } else {
        win = win >= 1 ? 1 : 0;
      }
      return {
        ...state,
        rightAnswers: state.rightAnswers + win,
        selectedAnswers: [],
        actualQuestion:
          state.actualQuestion +
          (state.actualQuestion !== 4 && state.selectedAnswers.length !== 0
            ? 1
            : 0),
        answers:
          state.selectedAnswers.length !== 0
            ? [...state.answers, [...state.selectedAnswers]]
            : [...state.answers]
      };
    default:
      return state;
  }
};
