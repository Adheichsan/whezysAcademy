import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets//img/landing-terra.png";
import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import FaqComponents from "../components/FaqComponents";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const HomePages = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Akselerator Talenta Teknologi dengan tujuan meningkatkan karir
                serta taraf hidup anak muda Indonesia dengan sukses berkarir di
                Industri Teknologi melalui pendidikan IT berkualitas.
              </p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/kelas")}>
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/program")}>
                Lihat Program
              </button>
            </Col>

            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="Hero-Images" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Program Whezys Academy</h1>
              <p className="text-center">
                Kami berupaya aktif untuk menjadi Coding Bootcamp penghasil
                talenta teknologi terbaik di Indonesia.
              </p>
            </Col>
          </Row>

          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />

                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-5">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-3">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>

          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg" data-aos="fade-up" data-aos-duration="1000"
                onClick={() => navigate("/kelas")}
              >
                Lihat Semua Kelas
                <i className="fa-solid fa-chevron-right ms-2"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Impact Story</h1>
              <p className="text-center mb-4">
                Beberapa testimonial dari alumni kami yang telah merasakan
                manfaat dan kepuasan menggunakan program
              </p>
            </Col>
          </Row>

          <Row>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return(
                  <SwiperSlide key={data.id} className="shadow">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="Testimonial"/>
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* Section FAQ */}
     <FaqComponents></FaqComponents>
    </div>
  );
};

export default HomePages;
