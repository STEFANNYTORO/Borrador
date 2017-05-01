import React, { Component } from 'react';
import BotonAgendarCita from './BotonAgendarCita';

export default class MostrarCadaPaciente extends Component{
	render(){
		return(
			<tr>
				
					<td>{this.props.paciente.id} </td>
					<h2>{this.props.paciente.nombre} {this.props.paciente.apellido}</h2>
					
					<p>{this.props.paciente.direccion}</p>
					<p>{this.props.paciente.telefono}</p>
					<p>{this.props.paciente.fechaNacimiento}</p>
					<p>{this.props.paciente.edad}</p>
					<p>{this.props.paciente.genero}</p>

					
					<BotonAgendarCita citaPaciente={this.props.paciente} key={this.props.paciente.id}/>
					
			</tr>

			);
	}
}