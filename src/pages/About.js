import React, { Component } from "react";
import "../styles/About.scss";
import Nav from "../components/Nav";
import Skills from "../components/About/Skills";
import { TextAnimate } from "../components/Home/TextAnimate";
import ContainerAnimate, {
  item,
} from "../components/Portfolio/ContainerAnimate";
import { motion } from "framer-motion";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    function stickersHidden() {
      const stickerSmile = document.querySelector(".stickersSmiley");
      const stickerWink = document.querySelector(".stickersWinky");
      stickerSmile.classList.add("hidden");
      stickerWink.classList.remove("hidden");
    }
    function stickersVisible() {
      const stickerSmile = document.querySelector(".stickersSmiley");
      const stickerWink = document.querySelector(".stickersWinky");
      stickerSmile.classList.remove("hidden");
      stickerWink.classList.add("hidden");
    }

    return (
      <>
        <Nav />
        <main id="about">
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
              About Me
            </TextAnimate>
          </h2>
          <div className="container">
            <ContainerAnimate
              delayChildren={0.3}
              staggerChildren={0.1}
              className="paragraph"
            >
              <motion.p variants={item}>
                Welcome to my portfolio!<br></br> I am a second-year undergraduate
                pursuing B.Tech in CSAI branch at Indian Institute of
                Information Technology, Lucknow. I am passionate about
                problem-solving and constantly strive to gain new knowledge and
                make valuable contributions in the field of Computer Science.
                <br></br>
                <br />I am proud to have been awarded the Harvard WECode
                Scholar'23 and currently serve as a mentee at Codess.cafe and
                member of GDSC IIITL. These opportunities have provided me with
                valuable insights and helped me grow as a developer.
              </motion.p>
              <motion.p variants={item}>
                I have strong skills in C++, Java, and Python and possess a good
                understanding of OOPS, OS, and DBMS. My experience creating apps
                with the Flutter framework has honed my skills in mobile app
                development, and I have successfully completed several projects.
                <br></br>
                Currently, I am focusing on improving my skills in Data
                Structures and Algorithms as I believe they are crucial for
                problem-solving in the field of Computer Science.
              </motion.p>
              <motion.p variants={item}>
                I enjoy working on projects that challenge me to learn and grow,
                and I believe in the power of collaboration and learning
                together. I am always looking for new opportunities to learn and
                contribute to the field of Computer Science. Thank you for
                visiting my portfolio, and I look forward to connecting with
                you!
              </motion.p>
              <motion.a
                href="CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="mouseover"
                variants={item}
              >
                See my CV
              </motion.a>
              <Skills />
            </ContainerAnimate>
            <motion.img
              src="images/Stickers 2.png"
              alt="Bitmoji Stickers"
              className="stickers stickersSmiley mouseover"
              onMouseEnter={stickersHidden}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            <img
              src="images/Stickers 3.png"
              alt="Bitmoji Stickers"
              className="stickers stickersWinky mouseover hidden"
              onMouseLeave={stickersVisible}
            />
          </div>
        </main>
      </>
    );
  }
}

export default About;
