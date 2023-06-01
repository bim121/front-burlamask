import styles from './App.module.css';
import SliderUpload from './Slider/SliderUpload';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
      <div className={styles.wrapHeader}>
        <img className = {styles.burlaMaskImg} src="burlamask.png" width="120vh" height="120vh"/>
        <h1>BurlaMask</h1>
      </div>
      <div className={styles.inputForm}>
        <form>
          <input type="text"/>
        </form>
      </div>
    </header>

    <div className={styles.background}>
        <div className={styles.slider}>
          <SliderUpload/>
        </div>
        <div className={styles.containerButton}>
          <button>Swap all</button>
        </div>
        <div className={styles.slider}>
          <SliderUpload/>
        </div>
    </div>
    
    <footer className={styles.footer}>
      <div className={styles.wrapFooter}>
        <img  className = {styles.burlaMaskImg} src="burlamask.png" width="120vh" height="120vh"/>
      </div>
      <p className={styles.text}>BurlaMask</p>
      
      <div className={styles.team}>
        <h2>Team</h2>
        <ul>
          <li>Tishik Vitalii</li>
          <li>Tkachenko Danil</li>
          <li>Kiriyak Nazarii</li>
          <li>Pan Stepan</li>
        </ul>
      </div>
    </footer>
    </div>
  );
}

export default App;
