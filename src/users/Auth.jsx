import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import LoginImage from "../assets/img/section-main.png";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, username, password);
            alert("Account created successfully!");
        } catch (err) {
            console.error(err);
            alert("Please Sign In Your Account!");
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            alert("Sign Out Account successfully");
        } catch (err) {
            console.error(err);
            alert(`Error creating account: ${err}`);
        }
    };

    return (
        <div className="login pt-10">
            <div className="logins">
                <div className="login-pages min-vh-100">
                    <Container>
                        <Row className="login-box d-flex align-items-center pt-lg-5">
                            <Col lg="6" className="login-form">
                                <h2 className="fw-bold text-center pt-5 animate__animated animate__fadeInLeft animate__delay-1s">Login to Whezys Academy</h2>
                                <p className="login-desc pt-5 animate__animated animate__fadeInLeft">Email</p>
                                <input className="animate__animated animate__animated animate__fadeInUp"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>

                                <p className="login-desc pt-5 animate__animated animate__fadeInLeft">Username</p>
                                <input className="animate__animated animate__animated animate__fadeInUp"
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                ></input>

                                <p className="login-desc pt-5 animate__animated animate__fadeInLeft">Password</p>
                                <input className="animate__animated animate__animated animate__fadeInUp"
                                    placeholder="Password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>

                                <Col className="btn-login pt-3">
                                    <button className="btn btn-outline-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={signIn}>Sign In</button>
                                    <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={signInWithGoogle}>Sign In With Google</button>
                                    <button className="btn btn-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={logout}>Log Out</button>
                                </Col>
                            </Col>
                            <Col lg="6" className="login-image-col">
                                <img src={LoginImage} alt="Login-Images" className="pt-5 animate__animated animate__fadeInUp" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};
