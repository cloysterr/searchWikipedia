import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [clickedItem, setClickedItem] = useState(null);

  const onTitleClick = (e, i) => {
    console.log("title clicked", i);
    if (i === clickedItem) {
      setClickedItem(null);
      return;
    }
    setClickedItem(i);
  };
  const renderedItem = items.map((item, i) => {
    let active = i === clickedItem ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div onClick={(e) => onTitleClick(e, i)} className={`title  ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
        {/* {i === clickedItem ? (
          <div className="content active">
            <p>{item.content}</p>
          </div>
        ) : null} */}
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItem}</div>;
};

export default Accordion;
