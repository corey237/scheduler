import { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
  //State initialization
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  //Making API call to backend for data, promise will reject if one of them fails
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        interviewers: all[2].data,
        days: all[0].data,
        appointments: all[1].data,
      }));
    });
  }, []);
  const setDay = (day) => setState({ ...state, day });
  const updatedDays = function (appointmentId, appointments) {
    const foundDay = state.days.find((day) =>
      day.appointments.includes(appointmentId)
    );
    const spots = foundDay.appointments.filter(
      (id) => appointments[id].interview === null
    ).length;
    return state.days.map((day) =>
      day.appointments.includes(appointmentId) ? { ...day, spots } : day
    );
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, appointment).then(() =>
      setState({
        ...state,
        appointments,
        days: updatedDays(id, appointments),
      })
    );
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, appointments, days: updatedDays(id, appointments) });
    });
  }

  return { state, setDay, bookInterview, cancelInterview };
}
