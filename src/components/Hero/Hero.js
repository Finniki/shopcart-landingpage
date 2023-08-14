import styles from "./Hero.module.css";
import spacemen from "../../assets/images/spacemen.png";
import spiderman from "../../assets/images/spiderman.png";
import HeroImages from "../HeroImages/HeroImages";

const Hero = () => {
  const heroImages = [
    {
      src: spiderman,
      title: "Fortnite",
      description:
        "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      reviews: "Reviews 3,4k",
      ratings: "",
    },
    {
      src: spacemen,
      title: "Spacemen 2000",
      description:
        "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      reviews: "Reviews 3,4k",
      ratings: "",
    },
  ];

  return (
    <header className={styles.hero}>
      <div className={styles.box}>
        {heroImages.map(({ src, title, description, reviews, ratings }) => {
          return (
            <HeroImages
              src={src}
              title={title}
              description={description}
              reviews={reviews}
              ratings={ratings}
            />
          );
        })}
      </div>
    </header>
  );
};

export default Hero;
