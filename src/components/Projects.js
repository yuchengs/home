import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './components.css';
import profile from '../profile.json';

class Projects extends React.Component {
  render() {
    return (
      <Container>
      <Row>
        <Col>
          {profile.projects.map(function (project, i) {
            return (
              <Card>
                <Card.Body>
                  <Card.Title className="projecttitle">
                    {project.projectName} &nbsp;&nbsp;
                    {project.files.map(
                      function(file, i) {
                        return (
                          <Card.Link href={file.src}><Badge variant="primary">{file.filename}</Badge></Card.Link>
                        );
                      }
                    )}
                  </Card.Title>
                  <Card.Subtitle className="projectsubtitle">{project.location},&nbsp;{project.duration}</Card.Subtitle>
                  <Card.Text className="projecttext">
                    {project.description}
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

export default Projects;
