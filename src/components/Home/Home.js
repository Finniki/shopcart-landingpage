import styles from "./Home.module.css";
import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <div>
      <h1 className={styles.header}>DURO</h1>
      <Nav />
    </div>
  );
};

export default Home;
