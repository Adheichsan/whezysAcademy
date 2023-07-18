import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FooterComponents = () => {
  return (
    <div className="footer py-5" data-aos="fade-down" data-aos-duration="1000">
      <Container>
        <Row className="justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Whezys.</h3>
            <p className="f-desc">
              Jalan Kebayoran Lama, Gang Tabah No. 55, Kebayoran Lama, Jakarta
              Selatan, DKI Jakarta. 12220
            </p>
            <div className="tiktok mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-tiktok"></i>
                <p className="m-0">weeejji</p>
              </Link>
            </div>
            <div className="dc mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-discord"></i>
                <p className="m-0">.whezzys</p>
              </Link>
            </div>
          </Col>
          
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
          </Col>

          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribes</button>
            </div>

            <div className="social mt-3">
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/adheichsn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/adheichsn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/Adheichsan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date(). getFullYear()} by <span className="fw-bold">Whezys</span>, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponents;
