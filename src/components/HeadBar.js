import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../profile.json';
import './components.css'
import yucheng from '../data/IMG-1418.JPG';

class HeadBar extends Component {
  render() {
    return (
      <Container><Row>
        <Col xs="auto" sm="auto"><Image src={yucheng} height="240px" rounded /></Col>
        <Col xs="auto" sm="auto">
          <h1> {profile.name} <br />
            <small> {profile.current} </small>
          </h1>
          <p>
            {profile.information.address.street} <br />
            {profile.information.address.city}, {profile.information.address.state}, {profile.information.address.post} <br />
          </p>
          <p><span className="entitystyle">Email:</span> <code>{profile.information.email.username} [at] {profile.information.email.server}</code></p>
          <p><span className="entitystyle">Phone:</span> <code>base64 -D &#60;&#60;&#60; &quot;{profile.information.phonebase64}&quot;</code></p>
        </Col>
      </Row></Container>
    );
  }
}

export default HeadBar;
