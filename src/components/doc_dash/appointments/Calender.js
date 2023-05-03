import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
// import './main.scss';
import { withRouter } from "react-router";
import "./calenda.css";
import "./calendar_.css";
import "./calendar.css";
import moment from "moment";
class Calendar extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    calendarWeekends: true,
  };

  render() {
    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: this.props.display ? "prev,today,next" : "null",
            center: this.props.display ? "title" : null,
            right: this.props.display
              ? "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              : null,
          }}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          ref={this.calendarComponentRef}
          weekends={this.state.calendarWeekends}
          events={this.props.calendarEvents}
          dateClick={this.handleDateClick}
          eventClick={({ event }) => {
            this.props.onEventClick(event._def.extendedProps);
            console.log(event, "PPPPP");
          }}
          height="parent"
          themeSystem="bootstrap"
        />
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends,
    });
  };

  handleDateClick = (arg) => {
    if (
      window.confirm("Would you like to add an event to " + arg.dateStr + " ?")
    ) {
      this.props.history.push(
        `/me/doctor/appointments/new?date=${moment(arg.dateStr).format("LLL")}`
      );
    }
  };
}

export default withRouter(Calendar);
