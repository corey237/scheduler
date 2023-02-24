export function getAppointmentsForDay(state, day) {
  //Get the day object based on the day paramater
  //
  //const result = words.filter(word => word.length > 6);
  const filteredAppointments = state.days.filter(
    (dayObj) => dayObj.name === day
  );
  //Loop through filteredAppointments.appointments, return objects that match items in state.appointments
  //

  if (!filteredAppointments[0]) {
    return [];
  }
  const result = filteredAppointments[0].appointments.map(
    (key) => state.appointments[key]
  );
  return result;
}
