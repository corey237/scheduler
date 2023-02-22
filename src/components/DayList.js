import React from "react";
import DayListItem from "./DayListItem";

//Props
//days:Array an array of objects (each object represents a day and includes an id, name, and spots)
//day:String the currently selected day
//setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"

function DayList(props) {
  const parsedDaysArr = props.days.map((currentValue) => {
    return (
      <DayListItem
        key={currentValue.id}
        name={currentValue.name}
        spots={currentValue.spots}
        selected={props.day === currentValue.name}
        setDay={props.setDay}
      />
    );
  });
  return <ul>{parsedDaysArr}</ul>;
}

export default DayList;
