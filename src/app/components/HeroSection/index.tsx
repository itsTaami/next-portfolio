"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import styles from "./style.module.scss";

const Section = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.HeroItem}>
        <div>
          <h1>
            Hello My name is <span style={{ color: "#fff" }}>Battamir</span>{" "}
          </h1>
          <h1>
            I am{" "}
            <span style={{ color: "#fff" }}>
              <Typewriter
                words={["Full Stack Developer", "Student of Pinecone"]}
                loop={false}
              />
            </span>
          </h1>
          <div className={styles.Icons}>
            <SocialIcon network="instagram" bgColor="#000" />
            <SocialIcon network="github" bgColor="#fff" />
            <SocialIcon network="facebook" bgColor="#000" />
          </div>
        </div>
      </div>
      <div className={styles.HeroItem}>
        <div className={styles.border}></div>
        <div className={styles.ImgContainer}>
          <img
            src="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/351323858_985356442646962_8055834724126605626_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hwITuBdQaPIAX-vChwc&_nc_ht=scontent.fuln6-1.fna&oh=00_AfC8YsqddSv4UVvVN-snLIKEmw3ikWag-yCeDxu-Qsanlw&oe=64820B98"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
