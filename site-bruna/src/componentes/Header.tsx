import WhatsAppButton from "./WhatsappButton";
import styles from "../App.module.css";
import LogoSite from "../assets/LogoSite.png"

function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={LogoSite} alt="Logo do Site" className={styles.logo} />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
        </ul>
      </nav>
      <WhatsAppButton />
    </header>
  );
}

export default Header;