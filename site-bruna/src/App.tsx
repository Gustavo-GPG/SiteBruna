import './App.module.css'
import Header from './componentes/Header'
import Profile from './componentes/Profile'
import styles from "./App.module.css";

function App() {

  return (
    <>
      <Header />
      <div className={styles.appProfileContainer}>
        <Profile />
      </div>
    </>
  )
}

export default App
