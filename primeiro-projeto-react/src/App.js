import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
    nome: ''
  }

  modificarNome = (event) => {
      let nome = event.target.value;
      this.setState({
        nome : nome
      })
  }

    render(){
        return (
          <React.Fragment>
            <input type="text" value={this.state.nome} onChange={ this.modificarNome}></input>
          <h1>Hello from APP {this.state.nome} </h1>
          </React.Fragment>
        )
    }
}

export default App;
