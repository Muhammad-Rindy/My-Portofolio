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
            <div>
              <Card.Body className="main-info-edukations">
                <span className="ul">My Work Experiences</span>
                <ul className="li">
                  <li>PT. Matahari Putra Prima Tbk, Nagoya, Kota Batam.</li>
                  <li>
                    PT. Yeakin Plastic Industries, Muka kuning, Kota Batam.
                  </li>
                  <li>
                    PT. Gastiasih Caraka, Lenteng agung, Kota Jakarta selatan.
                  </li>
                  <li>PT. Crystal Heaven, Tanjung Uncang, Kota Batam.</li>
                  <li>Freelancer Programmer</li>
                </ul>
              </Card.Body>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Layout>
      <Footer />
    </>
  );
}
