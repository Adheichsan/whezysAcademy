import { Container, Row, Col } from "react-bootstrap";
import FaqComponents from "../components/FaqComponents";

export const SyaratKetentuan = () => {
  return (
    <div className="syaratketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animated__delay-1s">Syarat & Ketentuan</h1>
            </Col>
          </Row>

          <Row className="pt-5">
            <Col>
              <p>
              Terima kasih telah mengunjungi WHEZYS - sebuah platform pendidikan teknologi untuk mempelajari digital skills dengan model blended learning (offline dan/atau online). Pada halaman ini akan dijelaskan ketentuan-ketentuan terkait dengan WHEZYS
              . Dengan Kamu menggunakan platform WHEZYS, maka Kamu telah setuju dan patuh dengan Ketentuan Penggunaan platform ini.
              </p>
            </Col>
          </Row>

          <Row className="py-3">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animated__delay-1s">Akses Platform</h4>
              <p>Dalam penggunaan platform ini, terdapat beberapa area dengan akses yang dibatasi sesuai dengan hak/lisensi Kamu. Tim WHEZYS memiliki hak untuk membatasi akses sebagian maupun keseluruhan platform, sesuai dengan kebijakan yang berlaku selama tidak mempengaruhi keamanan dan kenyamanan layanan WHEZYS.com. Penggunaan user ID dan password merupakan sepenuhnya hak dan tanggung jawab pengguna sekaligus pemilik akun dan password. Semua aktivitas dan penggunaan terkait pemilik user dan ID akan menjadi tanggung jawab pemilik yang terdaftar dalam database WHEZYS.com. Tim WHEZYScom memiliki wewenang untuk mengubah atau menonaktifkan user ID terkait apabila di kemudian hari terdapat pelanggaran Ketentuan Penggunaan atau atas permintaan pemilik ID.</p>
            </Col>
          </Row>

          <Row className="py-3">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animated__delay-1s">Jaminan Privasi</h4>
              <p>Kami berkomitmen untuk menjaga keamanan dan kerahasiaan data pribadi yang diberikan Pengguna saat mengakses dan menggunakan Platform (“Data Pribadi”). Dalam hal ini, Data Pribadi diberikan oleh Pengguna secara sadar dan tanpa adanya tekanan atau paksaan dari pihak manapun, serta ikut bertanggung jawab penuh dalam menjaga kerahasiaan Data Pribadi tersebut.</p>
              <p>Keamanan dan kerahasiaan akun Kamu, termasuk namun tidak terbatas pada seluruh data pribadi yang Kamu berikan kepada kami melalui formulir pendaftaran pada Platform kami, sepenuhnya merupakan tanggung jawab pribadi Kamu. Segala kerugian dan risiko yang timbul akibat atau sehubungan dengan kelalaian Kamu dalam menjaga keamanan dan kerahasiaan akun Kamu ditanggung oleh Kamu sendiri.</p>
            </Col>
          </Row>

          <Row className="py-3">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animated__delay-1s">Pelanggaran Hukum</h4>
              <p>Kamu hanya dapat menggunakan platform ini jika tidak bertentangan dengan atau melanggar peraturan perundang-undangan yang berlaku. Dengan menggunakan Platform, Kamu menerima tanggungjawab penuh bahwa penggunaan atau akses Kamu ke Platform tidak melanggar peraturan perundang-undangan yang berlaku. Untuk melaksanakan ketentuan ini, kami memiliki hak untuk menolak keanggotaan, atau menangguhkan atau menghentikan akun Kamu segera dan tanpa pemberitahuan sebelumnya atas kebijakan kami sendiri.</p>
              <p>Ketentuan Penggunaan ini diatur berdasarkan dan ditafsirkan sesuai dengan hukum Republik Indonesia. Kamu setuju bahwa setiap dan seluruh sengketa yang timbul dari atau sehubungan dengan Ketentuan Penggunaan ini (“Sengketa”) akan diupayakan untuk diselesaikan secara damai. Dalam hal penyelesaian secara damai tidak dapat dicapai dalam jangka waktu yang ditentukan, maka akan dilakukan mediasi oleh Pihak Ketiga yang akan ditunjuk secara bersama oleh Para Pihak. Jika Selanjutnya penyelesaian sengketa tidak dapat tercapai maka Kamu setuju untuk tunduk kepada wilayah hukum non-eksklusif Pengadilan Jakarta Selatan.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <FaqComponents></FaqComponents>
    </div>
  )
}

export default SyaratKetentuan;