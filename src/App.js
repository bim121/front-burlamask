import styles from './App.module.css';
import SliderUpload from './Slider/SliderUpload';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
      <div className={styles.wrapHeader}>
      <div className={styles.logo}><img className = {styles.burlaMaskImg} src="burlamask.png"/></div>
        <h1>BurlaMask</h1>
      </div>
      <div className={styles.inputFull}>
        <img className={styles.loopa} src = "loopa.png" onClick={focusInput}></img>
        <div className={styles.inputForm}>
          <form>
            <input className={styles.headerInput} id="myInput" type="text"></input>
          </form>
        </div>
      </div>
    </header>

    <div className={styles.background}>
        <div className={styles.slider}>
          <SliderUpload/>
        </div>
        <div className={styles.containerButton}>
         <div><img className={styles.swapIcon} src = "swap-icon.jpg"></img></div>
        </div>
        <div className={styles.slider}>
          <SliderUpload/>
        </div>
    </div>
    
    <footer className={styles.footer}>
      <div className={styles.wrapFooter}>
        <div className={styles.logo}><img  className = {styles.burlaMaskImg} src="burlamask.png" width="120vh" height="120vh"/></div>
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

function focusInput() {
  document.getElementById("myInput").focus();
}

export default App;
