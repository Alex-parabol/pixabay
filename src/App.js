import React, {useState, useEffect} from 'react'
import Form from './components/Form';
import axios from 'axios'
import ListadoImagenes from './components/ListadoImg/ListadoImagenes';
import './../src/App.css'

function App() {

  const [busqueda, setBusqueda]  = useState('')
  const [imagenes, setImagenes ] = useState([])
  const [ paginaActual, setPaginaActual ] = useState(1)
  const [ totalPaginas, setTotalPaginas ] = useState(1)

  useEffect(()=>{
   const consultarApi = async () => {
    if(busqueda === '') return;

    const imagenesPagina = 30;
    const apiKey = '17419464-948974fa95189a5fe8ff731e7'
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_page=${imagenesPagina}&page=${paginaActual}`;

    const resultado = await axios.get(url);
      setImagenes(resultado.data.hits)
      //calculamos paginación
    const calcularTotalPaginas = Math.ceil(resultado.data.totalHits/imagenesPagina)
    setTotalPaginas(calcularTotalPaginas)

   }
   consultarApi()

  }, [busqueda, paginaActual] )

  //funciones de paginación

  const paginaAnterior =()=>{
    const nuevaPaginaActual = paginaActual -1;
    
    if(nuevaPaginaActual === 0) return;

    setPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente =()=>{
    const nuevaPaginaActual = paginaActual +1;
    
    if(nuevaPaginaActual > totalPaginas) return;

    setPaginaActual(nuevaPaginaActual);
  }

  // scroll hacia arriba post paginación
  
    const jumbotron = document.querySelector('.jumbotron');
  jumbotron?.scrollIntoView({ behavior: 'smooth'})
  
 

  /* const Paginacion =()=> {
    if(busqueda){
      return (
      <>
      <button
      type='button'
      className='btn btn-info mr-1'
      >&laquo; Anterior </button>
      <button
      type='button'
      className='btn btn-info'
      >Siguiente &raquo;</button>
    </>
    )
    } else {
      return null
    }
    
  }
 */
  

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center tamaño">Buscador de imágenes</p>
        <Form
          setBusqueda={setBusqueda}
        />
      </div>
      <div
        className='row justify-content-center'
      >
        <ListadoImagenes
        imagenes={imagenes}
      />
      { (paginaActual === 1) ? null : (
      <button
      type='button'
      className='btn btn-info mr-1'
      onClick={paginaAnterior}
      >&laquo; Anterior </button>
      )
      }
      {(paginaActual === totalPaginas) ? null :
      <button
      type='button'
      className='btn btn-info'
      onClick={paginaSiguiente}
      >Siguiente &raquo;</button>
      }
      </div>
      
    </div>
  );
}

export default App;
