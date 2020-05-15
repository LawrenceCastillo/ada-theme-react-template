import React, {Component} from 'react'
import user from './info'
import Nav from './Components/Nav'
import Header from './Components/Header'
import SocialBar from './Components/Social/SocialBar'
import Contact from './Components/Contact/Contact'
import Collection from './Components/Collections/Collection'
import Footer from './Components/Footer'

/* 
  Designs: 
    wall2
    wall3 
    list 
*/

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
        <Collection      section={'projects'  }     design={'wall2'}     groups={projects} />
        <Collection      section={'experience'}     design={'wall3'}     groups={experience} />
        <Collection      section={'education' }     design={'list' }     groups={education} />
        <Footer />
      </div>
    )
  }
}

export default App;