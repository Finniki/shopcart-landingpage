import styles from "./Home.module.css";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <header>
        <h1 className={styles.header}>DURO</h1>
      </header>
      <div className={styles.box}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.hero}>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
