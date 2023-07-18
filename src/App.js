import logo from './logo.svg';
import discordIcon from './Discord-Logo-White.svg';
import twitterIcon from './TwitterSocial.png';
import circleIcon from './circle-icon.png';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const event1Date = new Date(2023, 6, 22);
  const event2Date = new Date(2023, 6, 29);

  const currentDate = new Date();

  const showEvent1 = currentDate <= event1Date;
  const showEventBox = currentDate <= event2Date;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">
            <img src={circleIcon} className="header-icon" alt="discord icon" />
            SFU Astronomy Club</h1>
          {showEventBox && (<div className={"event_box"}>
            <h4>
                Upcoming events:
            </h4>
              {showEvent1 && (<div className={"flex"}>
                      <p className={"event_text"}>
                          Thursday, July 20th:
                      </p>
                      <Button className="event_button" variant="primary" href="https://sfu.zoom.us/j/87316377035?pwd=Vk1uNHgwRWF5RzFzUjJzK1NjbXZKQT09">
                          Click to join Zoom Workshop @ 5:30pm
                      </Button>
                  </div>)
              }
              <div className={"flex"}>
                  <p className={"event_text"}>
                      Friday, July 28th:
                  </p>
                  <Button className="event_button" variant="primary" href="https://www.eventbrite.ca/e/679734422957">
                      RSVP to Astronomy 101: Telescope Demos
                  </Button>
              </div>
            </div>)
          }
        <h4>
            Follow us here:
        </h4>
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
        <p>@ SFU Astronomy Club 2023 | Contact: sfuastro@sfu.ca</p>
      </footer>
        <footer className="footer-sm">
            <p>Mascot drawn by Samuel Antunes Miranda, based on original by Pyralsprite</p>
        </footer>
    </div>
  );
}

export default App;
