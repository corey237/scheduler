import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";
import "components/DayListItem.scss";
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

  const formatSpots = function () {
    if (props.spots > 1) {
      return `${props.spots} spots remaining`;
    }

    if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    }

    if (props.spots === 0) {
      return `no spots remaining`;
    }
  };

  return (
    <li
      onClick={() => {
        props.setDay(props.name);
      }}
      className={dayListItemClasses}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
