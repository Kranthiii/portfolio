import React, { Component } from "react";
import Form from "../components/Contact/Form";
import Social from "../components/Home/Social";
import "../styles/Contact.scss";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Map from "../components/Contact/Map";
import { TextAnimate } from "../components/Home/TextAnimate";
import ContainerAnimate, {
    item,
} from "../components/Portfolio/ContainerAnimate";
import { motion } from "framer-motion";

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Nav />
                <main id="contact">
                    <h2>
                        <TextAnimate
                            initial={{ y: "100%" }}
                            animate="visible"
                            variants={{
                                visible: (i) => ({
                                    y: 0,
                                    transition: {
                                        delay: i * 0.1,
                                    },
                                }),
                            }}
                        >
                            Contact
                        </TextAnimate>
                    </h2>
                    <div className="container">
                        <Form />
                        <Map />
                        <ContainerAnimate
                            delayChildren={.8}
                            staggerChildren={0.1}
                            className="info"
                        >
                            <motion.div variants={item}>
                                <h3>
                                    Devasoth Bukya Kranthi
                                    <br />
                                    <span>
                                        Student in Indian Institute of Information Techonlogy Lucknow
                                    </span>
                                </h3>
                            </motion.div>
                            <motion.div variants={item}>
                                <span>Hyderabad, Telangana,India</span>
                                <a
                                    href="mailto:dbkranthi05@gmail.com"
                                    className="mouseover"
                                >
                                    dbkranthi05@gmail.com
                                </a>
                                <a
                                    href="tel:+91 8143957028"
                                    className="mouseover"
                                >
                                    +91 8143957028
                                </a>

                                <Social />
                            </motion.div>
                        </ContainerAnimate>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default Contact;
