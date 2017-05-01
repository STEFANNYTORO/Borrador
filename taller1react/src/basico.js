import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';


import 'react-big-calendar/lib/less/styles.less';


import localizer from 'react-big-calendar/lib/localizers/moment';
import moment from 'moment';
localizer(moment);





let Basico = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        style={{height: '420px'}}
        startAccessor='startDate'
        endAccessor='endDate'
        selectable={true}
        events={events.title}
        defaultDate={new Date(2015, 3, 1)}
      />
    )
  }
})


export default Basico;