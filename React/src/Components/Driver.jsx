import { Link } from "react-router-dom";

function Driver(props) {
  const { id, firstName, lastName, color, number, flag } = props;

  return (
    <li>
      <Link
        to={"/driver/" + firstName + "-" + lastName}
        className="driver"
        style={{ color }}
      >
        <div className="driver-info">
          <div className="name-wrapper">
            <div className="name f1--xxs f1-color--white followed f1-capitalize">
              <span className="firstname">{firstName} </span>
              <span className="lastname f1-bold--xxs f1-uppercase">
                {lastName}
              </span>
            </div>
          </div>
          <div className="info">
            <span className="number">{number}</span>
            <img src={"Flags/" + flag} className="flag" />
          </div>
        </div>
        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"></i>
      </Link>
    </li>
  );
}

export default Driver;
