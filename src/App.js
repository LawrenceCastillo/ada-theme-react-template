import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import user from './info'
import { NavigationBar } from './Components/navigation-bar/navigation-bar.component'
import { Header } from './Components/header/header.component'
import { SocialBar } from './Components/social-bar/social-bar.component'
import { Contact } from './Components/contact-about/contact.component'
import { Collection } from './Components/collection/collection.component'
import { Footer } from './Components/footer/footer.component'

/* 
  Designs: 
    wall2
    wall3 
    list 
*/

const personal = user[0]
const experience = user[1].experience
const projects = user[2].projects
const education = user[3].education

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title> {personal.name} | {personal.headline} </title>
          <link rel="canonical" href={personal.domain} />
          <meta name="description" content={personal.description} />
          <meta name="keywords" content={personal.keywords} />
        </Helmet>
        <NavigationBar />
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
