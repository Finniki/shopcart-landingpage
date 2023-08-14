import styles from "./HeroImages.module.css";
import { Button, ThemeProvider } from "@mui/material";
import buttonTheme from "../../assets/themes/buttonThemes";
import heroBtn from "../../assets/styles/heroBtn";

const HeroImages = ({ src, title, description, reviews, ratings }) => {
  return (
    <article className={styles.imageCard}>
      <div className={styles.imageArea}>
        <img src={src} alt={`"${src}"`} className={styles.image} />
      </div>
      <div className={styles.textArea}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.innerBox}>
          <ThemeProvider theme={buttonTheme}>
            <Button variant="contained" sx={heroBtn}>
              Get it now
            </Button>
          </ThemeProvider>
          <div className={styles.feedbackBox}>
            <p className={styles.reviews}>{reviews}</p>
            <p className={styles.ratings}>{ratings}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroImages;
