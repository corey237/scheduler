import React, { useState, useEffect } from "react";
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "./Appointment";
import axios from "axios";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";
export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });
  const setDays = (days) => setState((prev) => ({ ...prev, days }));

  const setAppointments = (appointments) =>
    setState((prev) => ({ ...prev, appointments }));

  const setInterviewers = (interviewers) =>
    setState((prev) => ({ ...prev, interviewers }));

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setDays(all[0].data);
      setAppointments(all[1].data);
      setInterviewers(all[2].data);
      // setState({ ...state, interviewers: all[2].data });
    });
  }, []);
  const appointmentsForDay = getAppointmentsForDay(state, state.day);
  const dailyAppointments = appointmentsForDay.map((currentAppointment) => {
    if (!currentAppointment) {
      return null;
    }
    const interviewsForDay = getInterview(state, currentAppointment.interview);
    return (
      <Appointment
        key={currentAppointment.id}
        id={currentAppointment.id}
        time={currentAppointment.time}
        interview={interviewsForDay}
      />
    );
  });
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={(day) => setDay(day)}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
