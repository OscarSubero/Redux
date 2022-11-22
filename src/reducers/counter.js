// Definimos un estado inicial de nuestro contador que va a ser igual a 0
// y ademas le pasamos un action
// El reducer va a recibir una accion a partir de un action que va a caer al reducer
import { DECREMENT, INCREMENT } from '../types/index';

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		default:
			return state;
	}
};

export default counterReducer;
