import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <div className="wrapHeader">
        <img  className = "burlaMaskImg" src="burlamask.png" width="120vh" height="120vh"/>
        <h1>BurlaMask</h1>
      </div>
      <div className="inputForm">
        <form>
          <input type="text"/>
        </form>
      </div>
    </header>

    <div className="background">
      <img src="background.png" width="1000vh" height="500vh"/>
    </div>
    <div className="background">
      <img src="background.png" width="1000vh" height="500vh"/>
    </div>
    
    <footer>
      <div className="wrapFooter">
        <img  className = "burlaMaskImg" src="burlamask.png" width="120vh" height="120vh"/>
      </div>
      <p>BurlaMask</p>
      
      <div className="team">
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
