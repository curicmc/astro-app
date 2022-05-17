import logo from './logo.svg';
import discordIcon from './Discord-Logo-White.svg';
import circleIcon from './circle-icon.png';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
            <img src={circleIcon} className="header-icon" alt="discord icon" />
            SFU Astronomy Club</h1>
        <Button className="red" variant="danger" size="lg" href="https://go.sfss.ca/clubs/63/info">
            Join the Club!
        </Button>
        <Button className="violet" variant="primary" size="lg" href="https://discord.gg/4r9ZmDSSKR">
            <img src={discordIcon} className="icon" alt="discord icon" />
            Discord Community

        </Button>
        <Button className="grey" variant="primary" size="lg" href="https://www.instagram.com/sfuastronomyclub/">
          Instagram (Under Construction)
        </Button>
        <img src={logo} className="App-logo" alt="logo" />

      </header>

      <footer className="footer">
        <p>@ SFU Astronomy Club 2022 | Contact: sfuastro@sfu.ca</p>
      </footer>
        <footer className="footer-sm">
            <p>Mascot drawn by Samuel Antunes Miranda, based on original by Pyralsprite</p>
        </footer>
    </div>
  );
}

export default App;
