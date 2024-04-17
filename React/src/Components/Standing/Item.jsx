import { Link } from "react-router-dom";

function Item(props) {
  const { rank, firstName, lastName, team, points } = props;

  return (
    <Link
      to="/"
      className="list-group-item list-group-item-action px-3 border-0"
      data-mdb-ripple-init
    >
      <p className="rankings-name">
        <span className="rank mr-2">{rank}</span>
        <span
          className="team-color-icon red-bull-racing"
          style={{ backgroundColor: `${getTeamColor(team)}` }}
        ></span>
        <span className="rankings-first-name">{firstName}</span>
        <span className="rankings-last-name">{lastName}</span>
        <span className="team">{getTeamDisplayName(team)}</span>
      </p>
      <div className="points-container">
        <span className="verstappen-points points">{points} PTS</span>
        <i className="fas fa-angle-right"></i>
        <i className="icon icon-chevron-right f1-color--warmRed"></i>
      </div>
    </Link>
  );
}

function getTeamDisplayName(teamName) {
  switch (teamName) {
    case "Red Bull":
      return "Red Bull Racing";
    case "Ferrari":
      return "Ferrari";
    case "McLaren":
      return "McLaren";
    case "Mercedes":
      return "Mercedes";
    case "Aston Martin":
      return "Aston Martin";
    case "Alpine F1 Team":
      return "Alpine";
    case "Sauber":
      return "Kick Sauber";
    case "Haas F1 Team":
      return "Haas";
    case "RB F1 Team":
      return "RB";
    case "Williams":
      return "Williams";
    default:
      return "";
  }
}

function getTeamColor(teamName) {
  switch (teamName) {
    case "Red Bull":
      return "#3671C6";
    case "Ferrari":
      return "#E80020";
    case "McLaren":
      return "#FF8000";
    case "Mercedes":
      return "#27F4D2";
    case "Aston Martin":
      return "#229971";
    case "Alpine F1 Team":
      return "#0093CC";
    case "Sauber":
      return "#52e252";
    case "Haas F1 Team":
      return "#B6BABD";
    case "RB F1 Team":
      return "#6692FF";
    case "Williams":
      return "#64C4FF";
    default:
      return "";
  }
}

export default Item;
