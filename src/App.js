import axios from 'axios';
import { Component } from 'react';
import './App.css';


class Inputs extends Component {

  state = {
    web: 0,
    ebay: 0
  }

  makeRequest = async (file) => {

    const body = new FormData();
    body.append('file', file);

    try {
      const { data } = await axios({
        method: 'POST',
        url: 'http://192.168.100.4:3001/api/automata',
        data: body,
      });

      this.setState({ web: data.results.web, ebay: data.results.ebay });

    } catch (error) {
      console.log(error);
    }
  }

  getFile = (event) => {
    const [file] = event.target.files;

    if (file.type !== 'text/plain') {
      alert('Solo se aceptan archivos .txt');
      return;
    }

    this.makeRequest(file);

  }


  file = () => {
    this.setState({
      web: this.state.web + 1,
      ebay: this.state.ebay + 1
    })
  }


  render() {


    return(
      <div className={'body'}>
        {/* <div className={'navbar'}>
          <p>Autómata Finito Determinístico</p>
        </div> */}

        <div className={'contenedor'}>
        {/* { <button onClick={this.makeRequest}>Button</button>} */}

          <div className={'estilosNumero'}>

            <div className={'titulo'} >
              <p>Autómata Finito Determinístico</p>
            </div>

            <div className={'cuerpo'}>

                <div className={'div_file'}>
                  <p className={'texto'}>Seleccionar archivo de mi dispositivo</p>
                  <input type="file" className={'styleInput'} onChange={this.getFile}></input>
                </div>

                <div className={'resultados'}>
                  <h2>Resultados</h2> 
                  <p><span style={{fontWeight: 'bold'}}>web:</span> {this.state.web}</p>
                  <p><span style={{fontWeight: 'bold'}}>ebay:</span> {this.state.ebay}</p>
                </div>

            </div>


          </div>


        </div>      
        
      </div>
      
    )
  }
}


function App() {
  return (
    <div>
      <Inputs></Inputs>
    </div>
  );
}

export default App;
