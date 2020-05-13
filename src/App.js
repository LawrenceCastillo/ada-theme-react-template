import React, {Component} from 'react';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Wall from './Components/Wall/Wall';
import user from './info'

const experience = user[1].groups;
const projects = user[2].groups;
const education = user[3].groups;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header personal={user[0]} />
        <Wall section={'experience'} groups={experience} />
        <Wall section={'projects'} groups={projects} />
        <Wall section={'education'} groups={education} />
      </div>
    )
  }
}

export default App;