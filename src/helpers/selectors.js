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
  console.log("result is:", result);
  return result;
}

export function getInterview(state, interview) {
  // Object.values(state.appointments).map((currentAppointment) => {
  //   if (!currentAppointment.interview) {
  //     return null;
  //   }
  //   console.log(currentAppointment);
  //   const interviewerObj = Object.values(interview).filter(
  //     (interviewer) =>
  //       interviewer.id === currentAppointment.interview.interviewer
  //   );
  //   console.log("interviewerobj is", interviewerObj);
  // currentAppointment.interview.interviewer["name"] = interviewerObj.name;
  // currentAppointment.interview.interviewer["avatar"] = interviewerObj.avatar;
  // const interviewerName = Object.values(interview).filter(
  //   (interviewer) => currentAppointment.interview.interviewer === interview.id
  // );
  // console.log(interviewerName);
  // const interviewerName = Object.values(interview).filter(
  //   (interviewer) =>
  //     interviewer.id === currentAppointment.interview.interviewer
  // );
  // });
  if (!interview) {
    return null;
  }
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
}
