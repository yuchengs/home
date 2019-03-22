import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './components.css';
import profile from '../profile.json';

class Courses extends React.Component {
  render() {
    return (
      <Container>
      <Row>
        <Col>
          {profile.courses.map(function (course, i) {
            return (
              <Card>
                <Card.Body>
                  <Card.Title className="coursetitle">
                    {course.title}&nbsp;&nbsp;
                    <Badge variant="dark">
                      {course.location}
                    </Badge>
                  </Card.Title>
                  <Card.Subtitle className="coursesubtitle"><Badge variant="success">{course.subtitle}</Badge></Card.Subtitle>
                  <Card.Text className="coursetext">
                    {course.information}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Courses;
