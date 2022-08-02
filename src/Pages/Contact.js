import Footer from "../components/Footer";
import Layout from "../Layout/Index";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Work() {
  return (
    <>
      <Layout>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Sent Me a Message</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write your message here ..."
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="danger" type="submit">
              Send
            </Button>
          </div>
        </Form>
      </Layout>
      <h2 className="isi">
        We love hearing about new ideas. your meassage will be confidentially
        sent to me. It's be place to the top of the stack and he respond for
        today. If you prefer to speak to someone right away, call us at
        62817-6970-783
      </h2>
      <div className="contact-footer">
        <Footer />
      </div>
    </>
  );
}
