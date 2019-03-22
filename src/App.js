import React, { Component } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import HeadBar from './components/HeadBar';
import AboutBar from './components/AboutBar';
import Education from './components/Education';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <Container>
        <HeadBar />
        <hr />
        <AboutBar />
        <hr />
        <Tabs defaultActiveKey="Education">
          <Tab eventKey="Education" title="Education">
            <Education />
          </Tab>
          <Tab eventKey="Experience" title="Experience">
            <Experience />
          </Tab>
          <Tab eventKey="Projects" title="Projects">
            <Projects />
          </Tab>
          <Tab eventKey="Courses" title="Courses">
            <Courses />
          </Tab>
        </Tabs>
        <Footer />
      </Container>
    );
  }
}

export default App;
