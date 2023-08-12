import styles from "./Hero.module.css";
import spacemen from "../../assets/images/spacemen.png";
import spiderman from "../../assets/images/spiderman.png";
import HeroImages from "../HeroImages/HeroImages";

const Hero = () => {
  const heroImages = [
    {
      src: spiderman,
      title: "Fortnite",
      description: "",
      reviews: "",
      ratings: "",
    },
    {
      src: spacemen,
      title: "Spacemen 2000",
      description: "",
      reviews: "",
      ratings: "",
    },
  ];

  return (
    <header>
      <div>
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
