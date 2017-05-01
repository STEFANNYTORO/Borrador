import React, {Component} from 'react'   



//informacion del evento cita

class AgendarCita extends Component{
	render(){
		var inicio, fin;
		var nombre, edad;
		var paciente,doctor;
		//faltan los demas input para agendar la cita
		return(
			<div id="agendarCita">
				<main>
				<center>
				<h2>Agendar Cita</h2>
				Paciente<input type="text" name="idPaciente" placeholder="Paciente" ref={node=>paciente=node}/>
				doctor<input type="text" name="idDoctor" placeholder="Doctor" ref={node=>doctor=node}/>

				Hora Inicio<input type="time" name="horaInicio"  ref={node=>inicio=node}
				 onChange={()=>this.props.propiedades.asignatiempo(inicio)}/>

				Hora Fin<input type="time" name="horaFin" ref={node=>fin=node} 
				onChange={()=>this.props.propiedades.asignatiempo(fin)}/>

				<p>{"hora inicio:" + this.props.propiedades.fechaseleccionada.start}</p>
				<p>{"hora fin:" + this.props.propiedades.fechaseleccionada.end}</p>

				<button type="button" onClick ={()=>this.props.propiedades.guardardatos(paciente,doctor)}>guardar</button>
				</center>
				</main>
			</div>
			)
	}
}

export default AgendarCita;