import logo from './logo.svg';
import discordIcon from './Discord-Logo-White.svg';
import twitterIcon from './TwitterSocial.png';
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
        <Button className="pink" variant="primary" size="lg" href="https://www.instagram.com/sfuastronomyclub/">
          Follow our Instagram
        </Button>
        <div>
            <Button className="blueFacebook" variant="primary" size="lg" href="https://www.facebook.com/sfuastronomyclub">
                Like our Facebook
            </Button>
            <Button className="blueTwitter" variant="primary" size="lg" href="https://twitter.com/SFUAstro">
                <img src={twitterIcon} className="icon" alt="twitter icon" />
            </Button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
          <Button className="purple" variant="outline-light" href="https://forms.gle/AmknHG8qEdkck3Dh9">
              Interested in helping out? Click me!
          </Button>
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
