import React from "react";
import logo from "../logo.png";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="size-nav">
      <Navbar bg="dark" variant="dark" expand={"md"} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="gambar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
          >
            <div className="h-100 bg-dark">
              <Offcanvas.Header
                closeButton
                closeVariant="white"
              ></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link to="/" className="item text-light">
                    HOME
                  </Link>
                  <div className="text-light">
                    <hr />
                  </div>
                  <Link to="/about" className="item text-light">
                    ABOUT ME
                  </Link>
                  <div className="text-light">
                    <hr />
                  </div>
                  <Link to="/educations" className="item text-light">
                    EDUCATIONS
                  </Link>
                  <div className="text-light">
                    <hr />
                  </div>
                  <Link to="/work" className="item text-light">
                    WORK EXPERIENCES
                  </Link>
                  <div className="text-light">
                    <hr />
                  </div>
                  <Link to="/contact" className="item text-light yes">
                    CONTACT ME
                  </Link>
                  <div className="text-light">
                    <hr />
                  </div>
                </Nav>
              </Offcanvas.Body>
            </div>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
