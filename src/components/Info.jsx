import React from "react";
import "./Info.css";
import { LuCalendarClock } from "react-icons/lu";

function Info() {
  return (
    <section className="info">
      <div className="info-1">
        <h1>Upcoming Exams</h1>
        <p>Enquire about upcoming examination and register for the exams</p>
      </div>

      <div className="line"></div>

      <div className="wrapper">
        <div className="calendar">
          <LuCalendarClock size={30} />
        </div>
        <div className="intro">
          <p className="info-date">02 October 2014</p>
          <p className="level-info">Level 1 Exam</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="calendar">
          <LuCalendarClock size={30} />
        </div>
        <div className="intro">
          <p className="info-date">Nov Dec 2016</p>
          <p className="level-info">Level 2 Exam</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="calendar">
          <LuCalendarClock size={30} />
        </div>
        <div className="intro">
          <p className="info-date">Ongoing this year</p>
          <p className="level-info">Level 3 (Grad)</p>
        </div>
      </div>
    </section>
  );
}

export default Info;
