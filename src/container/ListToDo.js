import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeTask, updateTaskStatus } from '../actions/index';

import ToDoItem from '../component/ToDoItem';

class ListToDo extends Component {

	onRemove(i){
		this.props.removeTask(i);
	}

	onUpdate(status, i){
		this.props.updateTaskStatus(status, i);
	}

	render() {
		return (
			<ul>
				{
					this.props.tasks.map((task, i) => {
						return <ToDoItem task={task} key={i}
									onClickRemove={() => {this.onRemove(i)}}
									onClickUpdate={(status) => {this.onUpdate(status, i)}}
								/>;
					})
				}
			</ul>
		);
	}

}

const mapStateToProps = ({tasks}) => {
	return {tasks};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({removeTask, updateTaskStatus}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);
