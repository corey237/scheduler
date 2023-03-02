import React from "react";
import DayListItem from "./DayListItem";

function DayList(props) {
  const parsedDaysArr = props.days.map((currentValue) => {
    return (
      <DayListItem
        key={currentValue.id}
        name={currentValue.name}
        spots={currentValue.spots}
        selected={props.value === currentValue.name}
        setDay={props.onChange}
      />
    );
  });
  return <ul>{parsedDaysArr}</ul>;
}

export default DayList;
