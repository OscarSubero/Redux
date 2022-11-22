// Estos actions les va a llegar a los reducers y les va a informar como deben modificar el state

import { INCREMENT, DECREMENT, SIGN_IN } from '../types/index';

export const increment = () => {
	return {
		type: INCREMENT,
	};
};

export const decrement = () => {
	return {
		type: DECREMENT,
	};
};

export const signIn = () => {
	return {
		type: SIGN_IN,
	};
};
