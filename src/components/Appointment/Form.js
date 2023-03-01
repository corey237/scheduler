import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  const reset = function () {
    setStudent("");
    setInterviewer("");
  };
  const cancel = function () {
    setError("");
    reset();
    props.onCancel();
  };

  const validate = function () {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    } else if (interviewer === null) {
      setError("please select an interviewer");
      return;
    } else {
      setError("");
      return props.onSave(student, interviewer);
    }
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"

            /*
          This must be a controlled component
          your code goes here
        */
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}

export default Form;
