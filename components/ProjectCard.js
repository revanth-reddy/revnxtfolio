import { Col } from "react-bootstrap";
import Lottie from "lottie-react";


export const ProjectCard = ({ title, description, jsonUrl }) => {
  return (
    <Col size={12} sm={12} md={4}>
      <div className="proj-imgbx">
        <Lottie animationData={jsonUrl} loop={true} style={{"height": "20vh"}} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}