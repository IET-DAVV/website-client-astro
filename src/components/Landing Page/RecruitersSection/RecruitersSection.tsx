import React from "react";
import styles from "./RecruitersSection.module.scss";
type Props = {};
import i1 from "../../../Images/RECRUITERS/Nuclei-Logo-White.svg";
import i2 from "../../../Images/RECRUITERS/corporate_home_2_u15612.svg";
import i3 from "../../../Images/RECRUITERS/image 24-1.svg";
import i4 from "../../../Images/RECRUITERS/image 24.svg";
import i5 from "../../../Images/RECRUITERS/image 25-1.svg";
import i6 from "../../../Images/RECRUITERS/image 25.svg";
import i7 from "../../../Images/RECRUITERS/image 69.svg";
import i8 from "../../../Images/RECRUITERS/image 70.svg";
import i9 from "../../../Images/RECRUITERS/image 71.svg";
import i10 from "../../../Images/RECRUITERS/logo-dark-groww.svg";
export default function RecruitersSection({}: Props) {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>RECRUITERS</div>
      <div className={styles.description}>
        MORE THAN 30 COMPANIES VISIT IET-DAVV EVERY YEAR
      </div>
      <div className={styles.imageContainer}>
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt={`recruiter-${index}`}
              height={50}
              width={50}
            />
          );
        })}
      </div>
    </div>
  );
}
