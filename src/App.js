import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias'



function App() {

  //definir la categoria y noticias
  const[categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {

    const consultarApi = async () =>{

const url= `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=e63d19120220439abc27162d72d0ae1c`

const respuesta = await fetch(url);
const noticias = await respuesta.json();

guardarNoticias(noticias.articles);
    }
    consultarApi();

  },[categoria]);


  return (
<Fragment>

<Header 
titulo='buscador de noticias'
/>
<div className="container white">

<Formulario
guardarCategoria={guardarCategoria}
/>
<ListadoNoticias
noticias={noticias}
/>

</div>

</Fragment>

    
  );
}

export default App;
