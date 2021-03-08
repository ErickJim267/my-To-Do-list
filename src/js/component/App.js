import React, { Component } from "react";
//Primero construir y heredar la clase a App. Se agrega Constructor para iniciar la clase
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			list: []
		};
	}
	//Actualizar el input
	updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}
	addItem() {
		//crear un item con un ID único
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};
		//copiar la lista de items actual
		const list = [...this.state.list];
		//añadir el item nuevo a la lista
		list.push(newItem);
		//Actualizar el state con la nueva lista y resetear el input en newItem
		this.setState({
			list,
			newItem: ""
		});
	}

	//Crear la función Delete item y copiar lista actual de items
	deleteItem(id) {
		const list = [...this.state.list];
		//Filtrar items que serán borrados
		const updatedList = list.filter(item => item.id !== id);
		//Aquí actualizo la lista
		this.setState({ list: updatedList });
	}

	render() {
		return (
			<div className="App">
				<div>
					Lista de Tareas
					<br />
					<input
						type="text"
						placeholder="Agrega una tarea aquí"
						value={this.state.newItem}
						onChange={e =>
							this.updateInput("newItem", e.target.value)
						}
					/>
					<button onClick={() => this.addItem()}>Añadir tarea</button>
					<br />
					<ul>
						{this.state.list.map(item => {
							return (
								<li key={item.id}>
									{item.value}
									<button
										className="btnDelete"
										onClick={() =>
											this.deleteItem(item.id)
										}>
										X
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
export default App;
