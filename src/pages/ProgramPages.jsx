import React from 'react';
import Images from "../assets/img/laptop-g32e78bd44_1920.png";
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import FaqComponents from '../components/FaqComponents';

function ProgramPages() {
    let navigate = useNavigate();
    return (
        <div className='program-page'>
            <div className='program-kampus'>
                <Container className='text-center'>
                    <Row>
                        <Col>
                            <p className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>Program Whezys Academy</p>
                            <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>
                                Siap Jadi Talenta <br />Digital #SesuaiDemand
                            </h1>
                            <p className='text-center pt-5 animate__animated animate__fadeInUp animate__delay-1s'>
                                Lengkapi keahlihan kamu sebagai Mahasiswa agar siap menjadi Talenta Digital <br />berkualitas yang #SesuaiDemand Industri setelah lulus
                            </p>
                            <h6 className='text-center pt-2 pb-3 animate__animated animate__fadeInUp animate__delay-1s'>
                                SESI LIVE ONLINE | KESEMPATAN PENEMPATAN KERJA | 100% GRATIS
                            </h6>
                            <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/kelas")}>
                                DAFTAR GRATIS
                            </button>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='program-desc pt-5 pb-5'>
                <Container className='text-center'>
                    <Row>
                        <Col>
                            <h3 className='fw-bold animate__animated animate__fadeInDown'>
                                PROGRAM MANDIRI BERSERTIFIKAT <br/>OLEH WHEZYS ACADEMY
                            </h3>
                            <h6 className='pt-4'>
                                Program ini dikembangkan sedemikian rupa agar semua mahasiswa yang mengikuti dapat mendapatkan ilmu-ilmu yang relevan dengan dunia kerja, sehingga bisa segera berkarir setelah menyelesaikan studinya.
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='program-card'>
                <Container className='text-center'>
                    <Row>
                        <h1 className='fw-bold animate__animated animate__fadeInDown animate__delay-1s'>3 Jenis Pembelajaran</h1>
                        <Col className='pt-5'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Images} className='img-card' />
                                <Card.Body>
                                    <Card.Title>Technical Skill Class</Card.Title>
                                    <Card.Text>
                                        Peserta program mengikuti kelas intensif yang akan berfokus pada penguasaan keterampilan seputar fundamental software engineering dan cara mengaplikasikannya pada sisi Backend dan Frontend.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='pt-5'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Images} className='img-card' />
                                <Card.Body>
                                    <Card.Title>Professional Skill Class (Non-Technical)</Card.Title>
                                    <Card.Text>
                                        Kelas ini bertujuan untuk memberi pandangan dalam berkarir di dunia teknologi serta, cara kita untuk memulai dan melewati prosesnya serta skill non-technical yang dibutuhkan oleh para profesional.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='pt-5'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Images} className='img-card' />
                                <Card.Body>
                                    <Card.Title>Capstone Project</Card.Title>
                                    <Card.Text>
                                        Produk teknologi yang akan dibuat didasari dari produk apa yang sedang menjadi kebutuhan di industri atau produk teknologi yang sedang di develop oleh Alterra Group.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='program-fs pt-5'>
                <Container className='text-center'>
                    <Row>
                        <h1 className='fw-bold'>Fasilitas yang kamu dapat</h1>
                        <Col className='pt-5'>
                            <h5 className='fw-bold'>
                                Subsidi Voucher Paket Data 150.000/Bulan
                            </h5>
                        </Col>
                        <Col className='pt-5'>
                            <h5 className='fw-bold'>
                                Bonus Pelatihan Setelah Lulus
                            </h5>
                        </Col>
                        <Col className='pt-5'>
                            <h5 className='fw-bold'>
                                Pembekalan Softskill & Hardskill
                            </h5>
                        </Col>
                        <Col className='pt-5'>
                            <h5 className='fw-bold'>
                                Mendapatkan Sertifikasi Kelulusam
                            </h5>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FaqComponents></FaqComponents>
        </div>
    );
}

export default ProgramPages;