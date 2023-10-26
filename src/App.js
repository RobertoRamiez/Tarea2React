import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header';
import Subjects from './Componentes/Subjects';
import Chosen from './Componentes/Chosen';

class App extends Component {
  state = {
    materias: [
      { clave: "AEB-1001", materia: "Desarrollo de Aplicaciones mobiles", hora: "13:00-14:00", grupo: "F8A" },
      { clave: "IFF-1012", materia: "Estrategias de gestion", hora: "14:00-15:00", grupo: "F8A" },
      { clave: "IFD-1023", materia: "Taller de emprendedores", hora: "17:00-18:00", grupo: "F8A" },
      { clave: "IFF-1016", materia: "Inteligencia de negocios", hora: "16:00-17:00", grupo: "F8A" },
      { clave: "IFD-1023", materia: "Taller de emprendedores", hora: "14:00-15:00", grupo: "F8B" },
      { clave: "IFF-1012", materia: "Estrategias de gestion", hora: "15:00-16:00", grupo: "F8B" },
      { clave: "AEB-1001", materia: "Desarrollo de Aplicaciones mobiles", hora: "16:00-17:00", grupo: "F8B" },
      { clave: "IFF-1016", materia: "Inteligencia de negocios", hora: "17:00-18:00", grupo: "F8B" },
    ],
    elegidos: [],
    total: 0
  }
  

  agregar = (mate) => {
    let elegidosTemp = [...this.state.elegidos, mate]
    let tempTotal = elegidosTemp.reduce((total, m) => { return total + 1 }, 0)
    this.setState({
      elegidos: elegidosTemp,
      total: tempTotal
    })
  }

  eliminar = (mate, indice) => {
    let temporal = this.state.elegidos.filter((m, i) => i !== indice)
    let tempTotal = temporal.reduce((total, m) => { return total + 1 }, 0)
    this.setState({
      elegidos: temporal,
      total: tempTotal
    })
  }

  buscar = (mate) => {
    let hour = this.state.elegidos.some(m => m.hora === mate.hora)
    return hour
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-body">
          
        <Subjects
            materias={this.state.materias}
            agregar={this.agregar}
            buscar={this.buscar}
            buscar2={this.buscar2}
        />

        <Chosen
          total={this.state.total}
          elegidos={this.state.elegidos}
          eliminar={this.eliminar}
        />
        </div>
      </div>
    )
  };
}

export default App;