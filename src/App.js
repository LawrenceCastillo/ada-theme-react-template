import React, {Component} from 'react';
import Header from './Components/Header';
import Wall from './Components/Wall/Wall';
import user from './info'

class App extends Component {
  render() {
    return (
      <div>
        <Header personal={user[0]} />
        <Wall section={user[1].section} groups={user[1].groups} />
        <Wall section={user[2].section} groups={user[2].groups} />
        <Wall section={user[3].section} groups={user[3].groups} />
      </div>
    )
  }
}

export default App;