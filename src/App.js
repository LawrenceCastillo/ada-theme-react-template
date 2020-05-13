import React, {Component} from 'react'
import user from './info'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import SocialBar from './Components/Social/SocialBar'
import Contact from './Components/Contact/Contact'
import Wall from './Components/Wall/Wall'

const personal = user[0]
const experience = user[1].groups
const projects = user[2].groups
const education = user[3].groups

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SocialBar icons={personal.social}/>
        <Header personal={personal} />
        <Contact personal={personal} />
        <Wall section={'experience'} groups={experience} />
        <Wall section={'projects'} groups={projects} />
        <Wall section={'education'} groups={education} />
      </div>
    )
  }
}

export default App;