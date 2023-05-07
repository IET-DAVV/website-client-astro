import React from "react";

type Props = {};
import arrowIcon from "../../../icons/ArrowCircleRight.svg";
import styles from "./WelcomeSection.module.scss";
import mBlock from "../../../Images/MBLOCK_FRONT.svg";
export default function WelcomeSection({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.row}>
          <span className={styles.line}></span>
          <span>WELCOME TO</span>
        </div>
        <div className={styles.name}>IET-DAVV</div>
        <div
          className={styles.row}
          style={{
            width: "90%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
        </div>
        <div className={styles.row}>
          <span>EXPLORE MORE</span>
          <button className={styles.exploreMoreBtn}>
            <img src={arrowIcon} height={50} width={50} />
          </button>
        </div>
      </div>
      <div
        className={styles.subContainer}
        style={{
          alignItems: "center",
          padding: "4rem 0",
        }}
      >
        <img src={mBlock} alt="IETDAVV" className={styles.collegeImage} />
      </div>
    </div>
  );
}
