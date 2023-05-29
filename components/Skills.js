import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillset = [
    "Python",
    "C++",
    "C",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Node",
    "React",
    "Nextjs",
    "Redux",
    "React-Native",
    "Django",
    "Flask",
    "Docker",
    "Kubernetes",
    "SQL",
    "AWS",
    "Spring",
    "Git",
    "CI/CD",
    "Linux",
    "REST API",
  ]

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Container>
                            <Row>
                                {
                                    skillset.map((skill, index) => {
                                        return (
                                            <Col size={12} sm={4} md={2} lg={2} style={{"margin": "10px"}} key={index}>
                                                <div className="animate__animated animate__pulse animate__infinite skillitem">{skill}</div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={"/img/color-sharp.png"} alt="Image" />
    </section>
  )
}