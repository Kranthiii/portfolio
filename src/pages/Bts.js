import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";
import { TextAnimate } from "../components/Home/TextAnimate";
import ContainerAnimate, {
    item,
} from "../components/Portfolio/ContainerAnimate";
import { motion } from "framer-motion";

class Bts extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Nav />
                <main id="bts">
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
                            My Education
                        </TextAnimate>
                    </h2>
                    <div>
                        <ContainerAnimate
                            delayChildren={0.3}
                            staggerChildren={0.1}
                            style = {{maxWidth: 900}}
                        >
                            <motion.p variants={item} style={{fontSize : "1.2em", paddingBottom : 10}}>
                                {/* Le BTS SIO est un diplôme d'État de niveau Bac+2
                                qui forme des professionnels de l'informatique
                                capables de répondre aux besoins des
                                organisations en matière de développement, de
                                maintenance et de gestion des systèmes
                                d'information. Le programme de ce BTS est
                                organisé autour de deux spécialités : SISR
                                (Solutions d'Infrastructure, Systèmes et
                                Réseaux) et SLAM (Solutions Logicielles et
                                Applications Métiers). */}
                                I am currently pursuing a four-year undergraduate degree in Computer Science & Artificial Intelligence from Indian Institute of Information Technology, Lucknow. I have completed courses on Data Structures, Analysis of Algorithms, Java, and other computer science-related topics. My current CGPA is 7.57/10.
                            </motion.p>
                            <motion.h2 variants={item} style={{fontSize : "1.4em", padding : "10px 0"}}>Intermediate</motion.h2>
                            <motion.p variants={item} style={{fontSize : "1.2em", paddingBottom : 10}}>
                                {/* La spécialité SISR forme des experts en systèmes
                                d'information et réseaux qui sont capables de
                                mettre en place, configurer et maintenir les
                                infrastructures informatiques d'une
                                organisation. Ils sont également en mesure de
                                résoudre les problèmes de sécurité informatique
                                et de gérer les services réseaux. */}
                                I have completed my intermediate education from Sri Chaitanya Junior Kalasala Hyderabad, Telangana. During this period, I studied Physics, Maths, and Chemistry, and achieved an impressive 98.2% percentage.
                            </motion.p>
                            <motion.h2 variants={item} style={{fontSize : "1.4em", padding : "10px 0"}}>School</motion.h2>
                            <motion.p variants={item} style={{fontSize : "1.2em", paddingBottom : 10}}>
                                {/* La spécialité SLAM quant à elle, forme des
                                développeurs d'applications capables de
                                concevoir, développer, tester et déployer des
                                solutions logicielles pour répondre aux besoins
                                métiers d'une organisation. Ils sont également
                                capables de mettre en place des bases de données
                                et de gérer l'ensemble du cycle de vie des
                                applications. */}
                                I completed my high school education from Nobel High School Kapra Hyderabad, Telangana. During my high school education, I scored a perfect 10 GPA in my 10th grade. I was also the Head Girl of the institution.
                            </motion.p>
                            {/* <motion.h2 variants={item} style={{fontSize : "1.4em", padding : "10px 0"}}>Après le BTS SIO</motion.h2> */}
                            <motion.p variants={item} style={{fontSize : "1.2em", paddingBottom : 20}}>
                                {/* Les étudiants du BTS SIO ont la possibilité de
                                poursuivre leurs études après l'obtention de
                                leur diplôme, en intégrant une licence
                                professionnelle ou une école d'ingénieurs. Ils
                                peuvent également intégrer directement le marché
                                du travail en occupant des postes tels que
                                technicien réseau, administrateur système,
                                développeur d'applications, chef de projet
                                informatique, etc. */}
                            </motion.p>
                            <motion.p variants={item} style={{fontSize : "1.2em", paddingBottom : 20}}>
                                {/* En résumé, le BTS SIO est une formation
                                professionnalisante qui permet aux étudiants de
                                développer des compétences techniques pointues
                                dans les domaines de l'infrastructure, des
                                réseaux et de l'applicatif. Cette formation
                                répond aux besoins du marché de l'emploi dans le
                                secteur de l'informatique, qui offre de
                                nombreuses opportunités de carrière. */}
                            </motion.p>
                        </ContainerAnimate>
                    </div>
                </main>
            </>
        );
    }
}

export default Bts;
