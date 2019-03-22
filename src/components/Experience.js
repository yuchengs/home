import React from "react";
import { Container, Row, Col, Media, Badge } from "react-bootstrap";
import profile from "../profile";
import moment from "moment";

function getDuration(duration) {
  const years = parseInt(duration / 12);
  const months = (duration > 12)? duration % 12 : duration
  return (years > 0? years + " year" + (years > 1? "s": "") + " and " : "") + (months > 0? months + " month" + (months > 1? "s": "") : "");
};

class Experience extends React.Component {
  render() {
    return (
      <Container>
      <Row>
        <Col>
          {profile.experiences.map(function (experience, i) {
            moment.locale('en');

            const totalDuration = experience.roles.reduce(function (cnt, role) {
              const startDate = moment(role.startDate);
              const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
              const duration = moment.duration(timeEnd.diff(startDate));
              return Number(cnt) + Number(duration.asMonths().toPrecision(1));
            }, 0);

            return (
              <Container key={i}>
                <Media>
                  <img
                    width={128}
                    height={128}
                    className="align-self-start mr-3"
                    src={experience.logo}
                    alt={experience.companyName}
                  />
                  <Media.Body>
                    <h4>
                      <a href={experience.url}>{experience.companyName}</a>
                      <span className="jobTotalDuration">&nbsp;--&nbsp;{getDuration(totalDuration)}</span>
                    </h4>

                    {experience.roles.map(function (role, i) {
                      const startDate = moment(role.startDate);
                      const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                      const duration = Number(moment.duration(timeEnd.diff(startDate)).asMonths().toPrecision(1));

                      return (
                        <div key={i}>
                          <h5>{role.title}</h5>
                          <p>
                            <span className="jobDuration">
                              {startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')} ({getDuration(duration)})
                            </span> &nbsp;&nbsp;
                            <Badge variant="info">{role.location}</Badge>
                          </p>
                          <p className="jobDescription">{role.description}</p>
                        </div>
                      );
                    })}
                  </Media.Body>
                </Media>
              </Container>
            );
          })}
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Experience;
