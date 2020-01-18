export const GENERATE_TEST = 'GENERATE_TEST';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const NEXT_QUESTION = 'NEXT_QUESTION';
// ============================================

export const generateTest = () => {
  return {
    type: GENERATE_TEST
  };
};

export const selectAnswer = payload => {
  return {
    type: SELECT_ANSWER,
    payload
  };
};

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION
  };
};
