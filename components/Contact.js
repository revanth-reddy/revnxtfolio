import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import Lottie from "lottie-react";
import contactjson from "../public/json/contact.json"

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer secret_GLQ2criOyWm3duSHVLRygBBK6RVGFEXcJdR4cc5k0SS");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Notion-Version", "2021-05-13");

    var contactdata = JSON.stringify({
      "parent": {
        "database_id": "41ffeca85f614fba9db939b1c61a4464"
      },
      "properties": {
        "name": {
          "title": [
            {
              "text": {
                "content": formDetails.name
              }
            }
          ]
        },
        "email": {
          "email": formDetails.email
        },
        "message": {
          "rich_text": [
            {
              "text": {
                "content": formDetails.message
              }
            }
          ]
        }
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: contactdata,
      redirect: 'follow'
    };

    fetch("https://api.notion.com/v1/pages", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result); setButtonText("Sent!");})
      .catch(error => setButtonText("Uh oh!!!"));


    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec
    setButtonText("Send");
    // await new Promise(resolve => setTimeout(resolve, 2000)); // 3 sec
    // setButtonText("Send");
    // setStatus({ success: true, message: 'Message sent successfully'});
    
    

    
    // setFormDetails(formInitialDetails);

    // if (result.code == 200) {
    //   setStatus({ success: true, message: 'Message sent successfully'});
    //   setButtonText("Send");
    // } else {
    //   setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    //   setButtonText("Send");
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <Lottie animationData={contactjson} loop={true} />
          </Col>
          <Col size={12} md={6}>
                <div className="animate__animated animate__fadeIn">
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}