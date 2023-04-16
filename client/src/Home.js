import React from 'react'
import { useHistory } from "react-router-dom"
//import from './App.css';
import  './App.css';


function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
    <div className="listaUnidadNegocio">
            <div className="rectangleParent">
                <div className="frameChild" >
                <b className="unidadesDeNegocio">Supply Chain Flow</b>
                
                <div className="queue">

                <div className="rectangleGroup">
                    <div className="frameItem" />
                    <div  onClick={redirect_to_roles} className="buscar">Register</div>
                </div>
               
                <div className="rectangleGroup">
                    <div className="frameItem" />
                    <div  onClick={redirect_to_addmed} className="buscar">Order Material</div>
                </div>
                <div className="rectangleGroup">
                    <div className="frameItem" />
                    <div  onClick={redirect_to_supply} className="buscar">Control Chain</div>
                </div>
                
                <div className="rectangleGroup">
                    <div className="frameItem" />
                    <div  onClick={redirect_to_track} className="buscar">Track Material</div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
