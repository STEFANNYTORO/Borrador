import React, { Component } from 'react';
import MostrarCadaPaciente from './MostrarCadaPaciente';


export default class paciente extends Component{
	render(){
		let cadapaciente =[];
		let boton = [];
		let termino = null;

		this.props.informacion.forEach((paciente) =>{
				if(paciente.id !== termino) {
					cadapaciente.push(<MostrarCadaPaciente paciente={paciente} key={paciente.id}/>);
					
				}
				termino = paciente.id;
			});	


		return(
			<table>
					<thead>
						<tr>
							<th>Paciente</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{cadapaciente}
						
					</tbody>
				</table>
			);
	}
}