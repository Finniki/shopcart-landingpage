import styles from "./HeroImages.module.css";

const HeroImages = ({ src, title, description, reviews, ratings }) => {
  return (
    <article>
      <img src={src} alt={`"${src}"`} />
      <h1 className={styles.header}> {title}</h1>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default HeroImages;
