import React, {Component} from 'react';
import Title from './Components/Title';
import List from './Components/List';
import user from './info'

class App extends Component {
  render() {
    return (
      <div>
        <Title section = {user[1].section}/>
        <List groups = {user[1].groups} />
      </div>
    )
  }
}

export default App;