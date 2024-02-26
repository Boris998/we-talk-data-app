import { ChangeEvent, useReducer } from "react";

interface InputState {
  value: string;
  isTouched: boolean;
}

type InputAction =
  | { type: 'INPUT'; value: string }
  | { type: 'BLUR' }
  | { type: 'RESET' };

const initialInputState: InputState = {
  value: '',
  isTouched: false
};

const inputStateReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, value: action.value };
    case 'BLUR':
      return { ...state, isTouched: true };
    case 'RESET':
      return initialInputState;
    default:
      return state;
  }
};

const useInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueInputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch({
      type: 'INPUT',
      value: e.target.value
    });
  };

  const valueInputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueInputBlurHandler,
    valueInputChangeHandler,
    reset
  };
};

export default useInput;
