import Footer from "../components/Footer";
import Layout from "../Layout/Index";
import gambar from "../gambar.jpg";
import Card from "react-bootstrap/Card";

export default function Work() {
  return (
    <div>
      <Layout>
        <Card className="bg-dark text-white">
          <Card.Img src={gambar} alt="Card image" className="headerimg" />
          <Card.ImgOverlay>
            <Card.Text className="main-info-edukations">
              <span className="ul">Formal</span>
              <ul className="li">
                <li>
                  SMP Negeri 007 Tanjung Pinang, Kepulauan Riau
                  <i>(2011-2014)</i>
                </li>
                <li>
                  SMK Penerbangan Nasional Batam, Kota Batam<i>(2014-2016)</i>
                </li>
                <li>
                  Politeknik Negeri Batam, Kota Batam<i>(2020-2023)</i>
                </li>
              </ul>
              <span className="ul">In Formal</span>
              <ul className="li">
                <li>
                  Pelatihan Masa Dasar Bimbingan Fisik dan Mental
                  <i>(2016)</i>
                </li>
                <li>
                  Pelatihan Berbasis Kompetensi Program Bahasa Inggris
                  <i>(2018)</i>
                </li>
              </ul>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Layout>
      <Footer />
    </div>
  );
}
