import React, { useEffect, useState } from "react";
import "./Standings.css";
import Item from "../Components/Standing/Item";

const Standings = () => {
  const [drivers, setDrivers] = useState([]);

  const fetchStandings = async () => {
    try {
      const response = await fetch(
        "https://ergast.com/api/f1/current/driverStandings.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDrivers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      console.log(drivers);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStandings();
  }, []);

  const rows = drivers.map((driver) => (
    <Item
      key={driver.position}
      rank={driver.position}
      firstName={driver.Driver.givenName}
      lastName={driver.Driver.familyName}
      team={driver.Constructors[0].name}
      points={driver.points}
    />
  ));

  const firstDriver = extractRelevantData(
    drivers.filter((driver) => driver.position == 1)[0]
  );

  const secondDriver = extractRelevantData(
    drivers.filter((driver) => driver.position == 2)[0]
  );

  const thidDriver = extractRelevantData(
    drivers.filter((driver) => driver.position == 3)[0]
  );

  return (
    <div className="driver-rankings">
      <div className="list-group list-group-light" id="myList">
        {rows}
      </div>

      <div className="driver-standings">
        <img src="./Images/DriverStandingsBackground.avif" />

        <div className="podium">
          <div className="podium-left">
            <div className="driver-left">
              <img
                className="driver-image"
                src={`Drivers/F1 Headshots PNG/${secondDriver.lastName}.avif`}
              />
            </div>
            <div
              className="team-border"
              style={{ backgroundColor: getTeamColor(secondDriver.team) }}
            >
              <div className="footer-std" style={{ background: "#212121" }}>
                <p className="firstname-left">{secondDriver.firstName}</p>
                <p className="lastname-left">{secondDriver.lastName}</p>
              </div>
            </div>
          </div>

          <div className="podium-center">
            <div className="driver-center">
              <img
                className="driver-image"
                src={`Drivers/F1 Headshots PNG/${firstDriver.lastName}.avif`}
              />
            </div>
            <div
              className="team-border"
              style={{ backgroundColor: getTeamColor(firstDriver.team) }}
            >
              <div className="footer-std" style={{ background: "#212121" }}>
                <p className="firstname-center">{firstDriver.firstName}</p>
                <p className="lastname-center">{firstDriver.lastName}</p>
              </div>
            </div>
          </div>

          <div className="podium-right">
            <div className="driver-right">
              <img
                className="driver-image"
                src={`Drivers/F1 Headshots PNG/${thidDriver.lastName}.avif`}
              />
            </div>
            <div
              className="team-border"
              style={{ backgroundColor: getTeamColor(thidDriver.team) }}
            >
              <div className="footer-std" style={{ background: "#212121" }}>
                <p className="firstname-right">{thidDriver.firstName}</p>
                <p className="lastname-right">{thidDriver.lastName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

function extractRelevantData(driver) {
  if (!driver) return {};

  console.log("driver", driver);

  return {
    rank: driver.position,
    firstName: driver.Driver.givenName,
    lastName: driver.Driver.familyName,
    team: driver.Constructors[0].name,
    points: driver.points,
  };
}

export default Standings;
