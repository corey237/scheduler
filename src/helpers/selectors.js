export function getAppointmentsForDay(state, day) {
  const filteredAppointments = state.days.filter(
    (dayObj) => dayObj.name === day
  );

  if (!filteredAppointments[0]) {
    return [];
  }
  const result = filteredAppointments[0].appointments.map(
    (key) => state.appointments[key]
  );
  return result;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
}

export function getInterviewersForDay(state, day) {
  const interviewerArr = [];
  const selectedDay = state.days.find((dayObj) => dayObj.name === day);
  if (selectedDay) {
    selectedDay.interviewers.forEach((interviewerId) => {
      interviewerArr.push(state.interviewers[interviewerId]);
    });
  }
  return interviewerArr;
}
