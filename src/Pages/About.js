import Footer from "../components/Footer";
import Layout from "../Layout/Index";
import gambar from "../gambar.jpg";
import Card from "react-bootstrap/Card";

export default function Work() {
  return (
    <>
      <Layout>
        <Card className="bg-dark text-white">
          <Card.Img src={gambar} alt="Card image" className="headerimg" />
          <Card.ImgOverlay>
            <Card.Body className="main-info">
              <h2 className="h2-about">
                Hi, My Name is Muhammad Rindy, but my friends call me Rindy, I
                was born on May 27, 1998 in Jakarta.
                <br /> I am someone who has big dreams, my dream is one day I
                can build my own start-up and create some applications that can
                help others. Yes, I like to help others without expecting
                anything in return, I just hope that one day the person I help
                can help me too when I'm in need. I've been very interested in
                digital technology since I was a kid. I also like to learn new
                things.
              </h2>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      </Layout>
      <Footer />
    </>
  );
}
