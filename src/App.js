import React, {useState} from 'react'
import Form from './components/Form'

function App() {

  const [busqueda, setBusqueda]  = useState('')

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Form
          setBusqueda={setBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
