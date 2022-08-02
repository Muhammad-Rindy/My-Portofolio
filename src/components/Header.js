import React from "react";
import Card from "react-bootstrap/Card";
import logs from "../logs.jpeg";
import Typed from "react-typed";

function Header() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={logs} alt="Card image" className="headerimg" />
      <Card.ImgOverlay>
        <Card.Text className="main-info">WEB DEVELOPER</Card.Text>
        <Typed
          className="typed-text main-typed"
          strings={[
            "Web designer",
            "Web developer",
            "Github",
            "Facebook",
            "Instagram",
            "Email",
            "Whatsapp",
          ]}
          typeSpeed={90}
          backSpeed={70}
          loop
        />
        <br />
        <a href="/contact" className="contact-me">
          CONTACT ME
        </a>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Header;
