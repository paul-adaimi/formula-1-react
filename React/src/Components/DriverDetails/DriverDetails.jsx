import React from "react";
import "./DriverDetails.css";

export default (props) => {
  const { driver } = props;

  return (
    <div className="driver-details">
      <div className="div">
        <div className="driver-stats">
          <div className="stat-list">
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Team</div>
              </div>
              <div className="stat-value">{driver.team}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Country</div>
              </div>
              <div className="stat-value">{driver.country}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Podiums</div>
              </div>
              <div className="stat-value">{driver.podiums}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Points</div>
              </div>
              <div className="stat-value">{driver.points}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Grand Prix entered</div>
              </div>
              <div className="stat-value">{driver.grandPrixEntered}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">World championships</div>
              </div>
              <div className="stat-value">{driver.worldChampionships}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Highest race finish</div>
              </div>
              <div className="stat-value">{driver.highestRaceFinish}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Highest grid position</div>
              </div>
              <div className="stat-value">{driver.highestGridPosition}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Date of birth</div>
              </div>
              <div className="stat-value">{driver.dateOfBirth}</div>
            </div>
            <div className="stat-list-row">
              <div className="stat-key">
                <div className="stat-key-2">Place of birth</div>
              </div>
              <div className="stat-value">{driver.placeOfBirth}</div>
            </div>
          </div>
        </div>
        <div className="driver-title">
          <div className="driver-image">
            <img
              className="name"
              src={`../Drivers/F1 Headshots PNG/${driver.lastName}.avif`}
            />
          </div>
          <div className="div-2">
            <div className="driver-number">
              <div className="text-wrapper-3">{driver.number}</div>
              <img className="icn-flag" src={"../Flags/" + driver.flag} />
            </div>
            <div className="text-wrapper-4">
              {driver.firstName} {driver.lastName}
            </div>
          </div>
        </div>
      </div>
      <div className="biography">
        <div className="text-wrapper-5">Biography</div>
        <p className="he-s-max-by-name-and">{driver.bio}</p>
      </div>
    </div>
  );
};
