// Definimos un estado inicial de nuestro reducer que va a ser igual a false
// y ademas le pasamos un action
// El reducer va a recibir una accion de los actions
import { SIGN_IN } from '../types/index';
const loggedReducer = (state = false, action) => {
	switch (action.type) {
		case SIGN_IN:
			return !state;
		default:
			return state;
	}
};

export default loggedReducer;
