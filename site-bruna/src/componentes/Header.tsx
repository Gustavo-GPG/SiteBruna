import WhatsAppButton from "./WhatsappButton";
import styles from "../App.module.css"

function Header() {
  return (
    <div className={styles.header}>
        <a>
            <img alt="Logo do Site" />
        </a>
        <nav>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Sobre</a>
                </li>
                <li>
                    <a>Posts</a>
                </li>
            </ul>
        </nav>
        <WhatsAppButton />
    </div>
  );
}

export default Header;