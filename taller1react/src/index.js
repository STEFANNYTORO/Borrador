import BigCalendar from 'react-big-calendar';
import React from 'react';
import ReactDOM from 'react-dom';
import Paciente from './Paciente';
import MyCalendar from './MyCalendar';
import { PropTypes } from 'react';
import Basico from './basico';

//import App from './App';
//import './index.css';



let pacientes = [
  {id: "1" , nombre: "sara", apellido: "gonzales", direccion: "cra 52 # 7 medellin", telefono: "3733630", fechaNacimiento: "19-Junio-1997", edad: "19", genero: "F"},
  {id: "2" , nombre: "victor", apellido: "zapata", direccion: "calle 2 # 3 envigado", telefono: "3723830", fechaNacimiento: "20-Febrero-1988", edad: "29", genero: "M"} 	
];


//const app = document.getElementById('app');
//ReactDOM.render(<Paciente informacion ={pacientes}/>, app);

ReactDOM.render(<MyCalendar />, document.getElementById('calen'));

//require("react-big-calendar/lib/css/react-big-calendar.css");
