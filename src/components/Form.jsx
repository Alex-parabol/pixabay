import React, {useState} from 'react'
import Error from './Error'

export default function Form({setBusqueda}) {

    //añadimos state
    const [termino, setermino ] = useState('');
    const [ error, setError ] = useState(false);

    //validación en el submit
    const handleSubmit = e => {
        e.preventDefault();
        //validamos
        if(termino.trim() === ''){
            setError(true)
            return;
        }
        setError(false)
        //enviamos la búsqueda al componente padre
        setBusqueda(termino)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
           
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='Busca una imagen, ejemplo: paisaje'
                    value={termino}
                    onChange={(e)=>{setermino(e.target.value)}}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                    type="submit"
                    className='btn btn-lg btn-danger btn-block'
                    placeholder='Busca una imagen, ejemplo: paisaje'
                    value='Buscar'
                    />
                </div>
            </div>
            {error ? <Error mensaje='Agrega una búsqueda'/> : null} 
        </form>
    )
}
