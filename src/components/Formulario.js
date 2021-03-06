import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types'
import useSelect from '../hooks/useSelect';

const Fromulario = ({guardarCategoria}) => {

    const OPCIONES =[
        {value:'general', label: 'General'},
        {value:'business', label: 'Economia'},
        {value:'entertainment', label: 'Entretenimiento'},
        {value:'health', label: 'Salud'},
        {value:'science', label: 'Ciencia'},
        {value:'sports', label: 'Deportes'},
        {value:'technology', label: 'Tecnologia'},
    ]





    //utilizar coustom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);


    //submit al form pasar categoria al app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }



    return (  

     <div className={`${styles.buscador} row`}>
         <div className="col s12 m8 offset-m2">

             <form
             onSubmit={buscarNoticias}
             >
               <h2 className={styles.heading}>Encuentra noticias por Categoria</h2>
               <SelectNoticias
               
               />

               <div className="input-field col s12">

                   <input
                   type="submit"
                   className={`${styles.btn_block}  btn-large amber darken-2`}
                   value="buscar"
                   />
               </div>

             </form>
         </div>


     </div>

    );
}
 Fromulario.propTypes = {
     guardarCategoria: PropTypes.func.isRequired
 }
export default Fromulario;