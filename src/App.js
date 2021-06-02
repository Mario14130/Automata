import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class Inputs extends Component {

  state = {
    web: 0,
    ebay: 0
  }


  file = () => {
    this.setState({
      web: this.state.web + 1,
      ebay: this.state.ebay + 1
    })
  }


  render() {

    const body = {
      width: '100%',
      height: '100vh',
      background: "#F5F6F7",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const contenedor = {
      minWidth: '1233px',
      maxWidth: '1233px',
      margin: '0 auto',
    }

    const styleInput = {
      background: 'linear-gradient(180deg, #f5f6f0 0%, #e5e7e9 100%)',
      color: '#212121',
      fontSize: '14px',
      textTransform: 'none',
      fontWeight: '400',
      padding: '8px 16px',
      width: 'auto',
      boxShadow: 'none'
    }

    const estilosNumero = {
      padding: '40px 10px',
      border: '1px black dashed',
      marginTop: '40px',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const resultados = {
      display: 'flex',
    }

    return(
      <div style={body}>
        <div style={contenedor}>
        {/* <button onClick={this.file}>Button</button> */}

          <div style={estilosNumero}>

            <input type="file" style={styleInput}></input>
            
          </div>

          <div style={estilosNumero}>

            <div style={resultados}>
              <p>web: {this.state.web}</p>
              <p>ebay: {this.state.ebay}</p>
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
