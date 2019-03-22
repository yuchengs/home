import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import './components.css';
import profile from '../profile.json';

class Education extends React.Component {
  render() {
    return (
      <Container>
      <Row>
        <Col>
          {profile.studies.map(function (study, i) {
            return (
              <Media key={i}>
                <img
                  width={128}
                  height={128}
                  className="align-self-center mr-3"
                  src={study.logo}
                  alt={study.institute}
                />
                <Media.Body>
                  <h4> <a href={study.url}>{study.institute}</a> </h4>
                  {
                    [
                      {"key": "Title", "value": study.title},
                      {"key": "Graduation Year", "value": study.graduationYear},
                      {"key": "Duration", "value": study.durationInYears + " year(s)"}
                    ].map(function (object, i) {
                      return (
                        <Container>
                          <Row>
                            <span className="formLabel">{object.key}:</span>
                            <span className="formValue"> {object.value} </span>
                          </Row>
                        </Container>
                      );
                    })
                  }
                </Media.Body>
              </Media>
            );
          })}
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Education;
