import React, {Component} from 'react';
import Title from './Components/Title';
import List from './Components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Title title = {'To Do'}/>
        <List tasks = {['1','2']}/>
        <List tasks = {['3','4']}/>
      </div>
    )
  }
}

export default App;