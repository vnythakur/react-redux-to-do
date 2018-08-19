export const addTask = (task) => {
	return {
		type: 'ADD_TASK',
		payload: task
	}

}

export const removeTask = (index) => {
	return {
		type: 'REMOVE_TASK',
		payload: index
	}

}

export const updateTaskStatus = (status, index) => {
	return {
		type: 'UPDATE_TASK_STATUS',
		payload: {index, status}
	}

}