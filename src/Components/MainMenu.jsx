import Driver from "./Driver";
import Team from "./Team";
import { drivers as driversData, teams as teamsData } from "../data";
import { Link } from "react-router-dom";

function splitIntoChunks(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
}

function MainMenu() {
  const driversSplit = splitIntoChunks(driversData, 5);

  const drivers = driversSplit.map((driversSub) => (
    <ul className="column">
      {driversSub.map((driver) => (
        <Driver key={driver.id} {...driver} />
      ))}
    </ul>
  ));

  const teamsSplit = splitIntoChunks(teamsData, 3);

  const teams = teamsSplit.map((teamsSub, index1) => (
    <ul className="column">
      {teamsSub.map((team, index2) => (
        <Team key={index1 + "" + index2} name={team} />
      ))}
    </ul>
  ));

  return (
    <div className="main-container">
      <header>
        <img src="F1.jpeg" alt="Formula 1 logo with background pattern" />
        <div>
          <div className="header-title">
            <svg
              className="fusion-f1"
              width="241px"
              height="24px"
              viewBox="0 0 241 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Fusion F1</title>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                fontFamily="Formula1-Display-Wide, Formula1"
                fontSize="24"
                fontStyle="expanded"
                fontWeight="400"
              >
                <text id="Fusion-F1" fill="#FFFFFF">
                  <tspan x="0" y="20">
                    Fusion F1
                  </tspan>
                </text>
              </g>
            </svg>
          </div>

          <nav className="navbar-f1 navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarText">
                <div className="navbar-nav ml-auto">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Latest <i className="fas fa-angle-down fa-xs"></i>
                  </a>
                  <Link
                    to="/video"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Video
                  </Link>
                  <Link
                    to="/f1unlocked"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    F1 Unlocked
                  </Link>
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Schedule <i className="fas fa-angle-down fa-xs"></i>
                  </a>
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Results <i className="fas fa-angle-down fa-xs"></i>
                  </a>
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Drivers <i className="fas fa-angle-down fa-xs"></i>
                  </a>
                  <div className="nav-secondary drivers-menu">
                    <div className="nav-contents">
                      <div className="nav-header">
                        <a
                          href="/en/drivers.html"
                          data-locationinpage="secondary_navigation"
                          data-pathtype="internal"
                          className="f1-bold--s f1-color--white "
                        >
                          All Drivers <i className="fas fa-angle-right"></i>
                          <i className="icon icon-chevron-right f1-color--warmRed"></i>
                        </a>
                        <a
                          href="/en/drivers/hall-of-fame.html"
                          data-locationinpage="secondary_navigation"
                          data-pathtype="internal"
                          className="f1-bold--s f1-color--white "
                        >
                          Hall of Fame <i className="fas fa-angle-right"></i>
                          <i className="icon icon-chevron-right f1-color--warmRed"></i>
                        </a>
                      </div>
                      <div className="nav-list drivers">{...drivers}</div>
                    </div>
                  </div>
                  <a
                    className="nav-link teams"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Teams <i className="fas fa-angle-down fa-xs"></i>
                  </a>
                  <div className="nav-secondary teams-menu">
                    <div className="nav-contents">
                      <div className="nav-header">
                        <a
                          href="/en/drivers.html"
                          data-locationinpage="secondary_navigation"
                          data-pathtype="internal"
                          className="f1-bold--s f1-color--white "
                        >
                          All Teams <i className="fas fa-angle-right"></i>
                          <i className="icon icon-chevron-right f1-color--warmRed"></i>
                        </a>
                      </div>
                      <div className="nav-list teams">{...teams}</div>
                    </div>
                  </div>
                  <a
                    className="nav-link gaming"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Gaming <i className="fas fa-angle-down fa-xs"></i>
                  </a>
                  <Link
                    to="/live-timing"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Live Timing
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default MainMenu;
