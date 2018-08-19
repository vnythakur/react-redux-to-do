import React, { Component } from 'react';

import AddToDo from '../container/AddToDo';
import ListToDo from '../container/ListToDo';


class App extends Component {
  render() {
    return (
      <div className="App">

      	<AddToDo />

		<ListToDo />

      </div>
    );
  }
}

export default App;
