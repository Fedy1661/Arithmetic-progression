import { GENERATE_TEST } from "./actions"

const initialState = {
  questions: [
    ''
  ],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GENERATE_TEST:
      return {
        ...state,
      }
    default:
      return state
  }
}
