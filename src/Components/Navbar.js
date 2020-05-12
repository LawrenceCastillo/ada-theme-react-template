import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
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
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.scrollToTop}>
            Home
            </Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass="active"
              to="Experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
            Experience</Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
            Projects</Link>
          </li>
          <li>
            <Link
              className='link'
              activeClass="active"
              to="Education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
            Education</Link>
          </li>
        </ul>
      </nav> 
    )
  }
}
 
export default Navbar;