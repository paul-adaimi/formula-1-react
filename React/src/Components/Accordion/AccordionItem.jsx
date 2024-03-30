import "./AccordionItem.css";

function AccordionItem(props) {
  const {
    backgroundImage,
    flagImage,
    titleImage,
    trackName,
    trackImage,
    dateText,
    isActive,
    id,
    handleClick,
  } = props;

  return (
    <div
      style={{
        backgroundImage: "url('" + backgroundImage + "')",
      }}
      onClick={() => handleClick(id)}
      className={`choice unset mx-2 ${isActive ? "expand" : "small"}`}
    >
      <div className="acc-body">
        <div className="flag-accordion-container">
          <img src={flagImage} className="flag-accordion" />
        </div>
        <div className="acc-title">
          <img src={titleImage} alt="Australia" />
        </div>
        <div className="acc-title">
          <img src={trackImage} alt="2024" />
        </div>
      </div>
      <div className="acc-footer">
        <h4 className="acc-h4">{dateText}</h4>
        <div className="track-names">
          <img src={trackName} />
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
