export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_TASK':
			return state.indexOf(action.payload) === -1 ? [action.payload, ...state] : state;
		case 'REMOVE_TASK':
			return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
		case 'UPDATE_TASK_STATUS':
			var stateCopy = [...state];
			stateCopy[action.payload.index].status = action.payload.status;
			return stateCopy;
		default:
			return state;
	}
}