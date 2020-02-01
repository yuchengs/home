import React, { Component } from 'react';
import profile from '../profile.json';
import cv from '../resume/cv.pdf';

class AboutBar extends Component {
  render() {
    return (
      <div id="about">
        <h2> About Me </h2>
        <p id="summary"> {profile.summary} </p>
        <p> You can find my CV <a href={cv}>here</a>.</p>
      </div>
    );
  }
}

export default AboutBar;
