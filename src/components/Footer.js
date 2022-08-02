import Card from "react-bootstrap/Card";
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <Card className="text-center">
      <Card.Body className="body-footer">
        <Card.Title>Don't Miss Out!</Card.Title>
        <hr />
        <Card.Text>
          Follow me, and send me a message in my social media ..
        </Card.Text>
        <a href="https://github.com/Muhammad-Rindy">
          <FaGithub className="icon" />
        </a>
        <a href="https://facebook.com/Muhammad Rindy">
          <FaFacebook className="icon" />
        </a>
        <a href="https://Instagram.com/muhammadrindyy">
          <FaInstagram className="icon" />
        </a>
        <a href="mailto:muhammadrindy2705@gmail.com">
          <CgMail className="icon" />
        </a>
        <a href="https://wa.me/628176970783">
          <FaWhatsapp className="icon" />
        </a>
      </Card.Body>
      <div className="footer-line">
        <Card.Footer className="text-muted">
          Privacy Policy - Site Map - Support ©2021 80/20 Coding
        </Card.Footer>
      </div>
    </Card>
  );
}

export default Footer;
