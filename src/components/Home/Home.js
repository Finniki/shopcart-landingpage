import styles from "./Home.module.css";
import Nav from "../Nav/Nav";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <h1 className={styles.header}>DURO</h1>
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
