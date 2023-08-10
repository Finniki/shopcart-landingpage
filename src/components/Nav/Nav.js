import styles from "./Nav.module.css";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboardIcon.svg";
import { ReactComponent as GamingIcon } from "../../assets/icons/gamingIcon.svg";
import { ReactComponent as MarketplaceIcon } from "../../assets/icons/marketplaceIcon.svg";
import { ReactComponent as StreamIcon } from "../../assets/icons/streamIcon.svg";
import { ReactComponent as TradeIcon } from "../../assets/icons/tradeIcon.svg";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navList}>
        <div className={styles.navItemBox}>
          <DashboardIcon className={styles.icon} />
          <p className={styles.navItem}>Dashboard</p>
        </div>
        <div className={styles.navItemBox}>
          <GamingIcon className={styles.icon} />
          <p className={styles.navItem}>Gaming HUB</p>
        </div>
        <div className={styles.navItemBox}>
          <MarketplaceIcon className={styles.icon} />
          <p className={styles.navItem}>NFT Marketplace</p>
        </div>
        <div className={styles.navItemBox}>
          <StreamIcon className={styles.icon} />
          <p className={styles.navItem}>Stream</p>
        </div>
        <div className={styles.navItemBox}>
          <TradeIcon className={styles.icon} />
          <p className={styles.navItem}>Trade</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
