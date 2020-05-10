import React, {Component} from 'react';
import Title from './Components/Title';
import List from './Components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Title title = {'work'}/>
        <List />
      </div>
    )
  }
}

export default App;