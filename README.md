## Developed By:

Corey Silver

## Description

Interview Scheduler is a full stack application that lets a user book, delete and edit appointments through an easy to use UI. the frontend is built using React components and all appointment data is stored persistently in a PostgreSQL database. Unit, Integration and end-to-end tests have also been written to ensure the application is functioning as expected.

## Technologies

Front-End: ReactJS, JSX, HTML, CSS\
Back-End: Node, Express, PostgreSQL\
Testing: Jest, Cypress, Storybook

## Screenshots

Initial Calendar View on Load

![Initial Calendar View](https://github.com/corey237/scheduler/blob/master/screenshots/appointment_view.PNG?raw=true "Initial Calendar View")

Creating a new Appointment

![Creating a new Appointment](https://github.com/corey237/scheduler/blob/master/screenshots/saving_appointment.PNG?raw=true "Creating a new Appointment")

Calendar view once the appointment is saved

![Calendar with new Appointment](https://github.com/corey237/scheduler/blob/master/screenshots/new_appointment.PNG?raw=true "Calendar with new Appointment")

Example of error handling if appointment cannot be saved or deleted

![Error Handling](https://github.com/corey237/scheduler/blob/master/screenshots/error_handling.PNG?raw=true "Error Handling")

## Instructions

1. in your terminal, run <code>npm install</code> to install the dependencies
2. Visit http://localhost:8000/ to start using the app!

NOTE: In order for the application to function correctly, the scheduler-api backend will need to be downloaded and running at the same time as the application. The download link can be found below (Instructions for scheduler-api setup are in the README file)

https://github.com/corey237/scheduler-api
