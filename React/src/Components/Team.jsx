function Team(props) {
  const { name } = props;

  const nameWithoutSpaces = name.replace(/\s+/g, "");

  return (
    <li>
      <a
        href="/en/teams/Alpine.html"
        className="team"
        style={{ color: "white" }}
        data-locationinpage="secondary_navigation"
        data-pathtype="internal"
      >
        <div className="team-info">
          <div className="teamname-wrapper">
            <div className="teamname-sub-wrapper name f1--xxs f1-color--white followed f1-capitalize">
              <span className="teamname">{name}</span>
              <span className="arrow">
                <i className="fas fa-angle-right white"></i>
              </span>
            </div>
          </div>
          <div className="car-container">
            <img
              className="car"
              src={"Teams/" + nameWithoutSpaces + ".avif"}
              alt="Alpine Team car"
            />
          </div>
        </div>
        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
      </a>
    </li>
  );
}

export default Team;
