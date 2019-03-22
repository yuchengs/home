import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './components.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr/>
        <div className="footerItem"><div>
          <a href="https://www.linkedin.com/in/yuchengs"><FontAwesomeIcon icon={faLinkedin} /></a>
          &nbsp;&nbsp;
          <a href="https://github.com/yuchengs"><FontAwesomeIcon icon={faGithub}  /></a>
        </div></div>
      </footer>
    );
  }
}

export default Footer;
