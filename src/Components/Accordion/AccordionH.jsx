import AccordionItem from "./AccordionItem";
import { useState } from "react";
import { accordionItems } from "../../data";

function AccordionH() {
  const [activeItem, setActiveItem] = useState(-1);

  let handleClick = (id) => {
    setActiveItem(id);
  };

  let items = accordionItems.map((accordionItem) => (
    <AccordionItem
      key={accordionItem.id}
      isActive={activeItem === accordionItem.id}
      handleClick={handleClick}
      id={accordionItem.id}
      backgroundImage={accordionItem.background_image}
      flagImage={accordionItem.flag_img_src}
      titleImage={accordionItem.card_title_img_src}
      trackName={accordionItem.track_name_img_src}
      trackImage={accordionItem.track_img_src}
      dateText={accordionItem.date}
    />
  ));

  return <div className="horizontal-accordion">{items}</div>;
}

export default AccordionH;
