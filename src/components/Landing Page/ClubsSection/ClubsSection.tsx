import React from "react";
import styles from "./ClubsSection.module.scss";

interface IClub {
  name: string;
  description: string;
  images: Array<string>;
}
import i1 from "../../../Images/CLUBS/E-Cell/1.svg";
import i2 from "../../../Images/CLUBS/E-Cell/2.svg";
import i3 from "../../../Images/CLUBS/E-Cell/3.svg";
import i4 from "../../../Images/CLUBS/E-Cell/4.svg";
const ClubsSection = () => {
  const [selectedClub, setSelectedClub] = React.useState(0);
  const clubs: Array<IClub> = [
    {
      name: "ACM",
      description:
        "ACM is the world's largest educational and scientific computing society, uniting computing educators, researchers and professionals to inspire dialogue, share resources and address the field's challenges. As the computing profession's trusted voice, ACM advances the art, science and practice of computing as a vital global resource.",
      images: [i1, i2, i3, i4],
    },
    {
      name: "E-Cell",
      description:
        "E-Cell is the world's largest educational and scientific computing society, uniting computing educators, researchers and professionals to inspire dialogue, share resources and address the field's challenges. As the computing profession's trusted voice, ACM advances the art, science and practice of computing as a vital global resource.",
      images: [i1, i2, i3, i4],
    },
    {
      name: "Feedbox",
      description:
        "FeedBox is the world's largest educational and scientific computing society, uniting computing educators, researchers and professionals to inspire dialogue, share resources and address the field's challenges. As the computing profession's trusted voice, ACM advances the art, science and practice of computing as a vital global resource.",
      images: [i1, i2, i3, i4],
    },
    {
      name: "Pratyaksh",
      description:
        "Pratyaksh is the world's largest educational and scientific computing society, uniting computing educators, researchers and professionals to inspire dialogue, share resources and address the field's challenges. As the computing profession's trusted voice, ACM advances the art, science and practice of computing as a vital global resource.",
      images: [i1, i2, i3, i4],
    },
    {
      name: "ISHRAE",
      description:
        "ISHRAE is the world's largest educational and scientific computing society, uniting computing educators, researchers and professionals to inspire dialogue, share resources and address the field's challenges. As the computing profession's trusted voice, ACM advances the art, science and practice of computing as a vital global resource.",
      images: [i1, i2, i3, i4],
    },
  ];
  console.log(selectedClub);
  return (
    <div className={styles.container}>
      <div className={styles.sideContainer}>
        <div className={styles.heading}>IET CLUBS</div>
        <ul className={styles.list}>
          {clubs?.map((club: any, index: number) => {
            return (
              <li
                onClick={() => {
                  console.log(index);
                  setSelectedClub(index);
                }}
                className={styles.listItem}
                style={{
                  color: selectedClub === index ? "black" : "gray",
                  listStyleType: selectedClub === index ? "disc" : "none",
                }}
              >
                {club.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.description}>
          {clubs[selectedClub].description}
        </div>
        <div className={styles.imagesContainer}>
          {clubs[selectedClub]?.images?.map((image: any, index: number) => {
            return (
              <img src={image} alt={`club-${index}`} height={50} width={50} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClubsSection;
