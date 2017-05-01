import React from 'react'
import moment from 'moment'
import events from './events'
//import { getEvents } from './gcal'

import BigCalendar from 'react-big-calendar'
import {connect} from "react-redux";
import 'react-big-calendar/lib/css/react-big-calendar.css';



import AgendarCita from './AgendarCita';



BigCalendar.momentLocalizer(moment); 


class MyCalendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: events,
      fechaSeleccion: null,
      horaInicial: null,
      horaFinal: null
    }
  }
 

 componentDidMount(){
  //this.props.getEvents();
 }


  //toma lo la fecha a la que se le haga click
  fechaseleccionada(slotInfo){
    this.setState({fechaSeleccion: slotInfo});
    //se pone lo que quiere que se muestre cuando se de click
    console.log(this.state.fechaSeleccion);
  }

  asignatiempo(tiempo){ //me trae todo del componente agendarcita
    console.dir(tiempo)
    tiempo.name== "horaInicio" ? this.setState({horaInicial: tiempo.value}) :
                              this.setState({horaFinal: tiempo.value})
  }

  guardardatos(pacie,doc){
    console.log(pacie.value , doc.value)
  }
  
  render () {
    console.log("los eventos son: " , this.state.events);
    var propiedades={
          fechaseleccionada:this.fechaseleccionada ,
          asignatiempo: this.asignatiempo.bind(this) ,
          fechaseleccionada: this.state.fechaSeleccion,
          guardardatos: this.guardardatos.bind(this)
    }

    var eventos={title: 'All Day Event',    
    start: new Date(2017, 3, 0),
    end: new Date(2017, 3, 1)}


    return (
      <div id="calendario" >
      <BigCalendar
        {...this.props}
        style={{height: '420px'}}
        startAccessor='startDate'
        endAccessor='endDate'
        selectable={true}
        events={events}
        onSelectSlot={(slotInfo) => this.fechaseleccionada(slotInfo)}
        defaultView='week'
      />


      { this.state.fechaSeleccion ? <AgendarCita propiedades= {propiedades} />  : null }
      </div>
    )
  }
}




export default MyCalendar;



//citas-165923 
//  AIzaSyAjzepKijqW8lS2Kew2gdifuqjFV3S7i68 