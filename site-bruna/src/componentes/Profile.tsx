import styles from '../App.module.css';
import DesignProfile from '../assets/DesignProfile.jpg';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.textContent}>
        <h2 className={styles.name}>Dra. Bruna Miranda Ribeiro</h2>
        <p className={styles.credential}>Crefito 4/298842-F</p>
        <p className={styles.largerText}>
          Fisioterapeuta com atuação em Urologia, Ginecologia, Coloproctologia e Obstetrícia
        </p>
        <p className={styles.standardText}>
          Graduação em Fisioterapia pela Universidade Federal de Uberlândia
        </p>
        <p className={styles.standardText}>
          Pós Graduação em Fisioterapia Pélvica – Uroginecologia Funcional pela Faculdade Inspirar
        </p>
      </div>
      <img src={DesignProfile} alt="Foto da Dra. Bruna" className={styles.image} />
    </div>
  );
}

export default Profile;