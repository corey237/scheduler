import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

//Possible Props:
//name:String the name of the day
//spots:Number the number of spots remaining
//selected:Boolean true or false declaring that this day is selected
//setDay:Function accepts the name of the day eg. "Monday", "Tuesday"

export default function DayListItem(props) {
  const dayListItemClasses = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  return (
    <li
      onClick={() => {
        props.setDay(props.name);
      }}
      className={dayListItemClasses}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}
