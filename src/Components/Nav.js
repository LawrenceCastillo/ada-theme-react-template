import React, {Component} from 'react'
import { Link, animateScroll as scroll } from "react-scroll"

class Nav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav>
        <ul>
           <li>
            <Link
              className='link'
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
            <span role="img" aria-label="home">🏠</span></Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
            <span role="img" aria-label="contact">📬</span></Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
            <span role="img" aria-label="projects">🎒</span></Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass='active'
              to='experience'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
            <span role="img" aria-label="experience">💼</span></Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass='active'
              to='education'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}>
            <span role="img" aria-label="education">🎓</span></Link>
          </li>
        </ul>
      </nav> 
    )
  }
}
 
export default Nav;