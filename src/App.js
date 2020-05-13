import React, {Component} from 'react'
import user from './info'
import Nav from './Components/Nav'
import Header from './Components/Header'
import SocialBar from './Components/Social/SocialBar'
import Contact from './Components/Contact/Contact'
import Wall from './Components/Wall/Wall'
import Wall3 from './Components/Wall3/Wall3'
import List from './Components/List/List'
import Footer from './Components/Footer'

const personal = user[0]
const experience = user[1].groups
const projects = user[2].groups
const education = user[3].groups

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header personal={personal} />
        <SocialBar icons={personal.social}/>
        <Contact personal={personal} />
        <Wall section={'projects'} groups={projects} />
        <Wall3 section={'experience'} groups={experience} />
        <List section={'education'} groups={education} />
        <Footer />
      </div>
    )
  }
}

export default App;