import { createStore } from 'redux';

const initialState = {
  buttonData: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_CLICKED':
      const { buttonName } = action.payload;
      const clickCount = state.buttonData[buttonName]
        ? state.buttonData[buttonName].clickCount + 1
        : 1;
      return {
        ...state,
        buttonData: {
          ...state.buttonData,
          [buttonName]: { clickCount }
        }
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
