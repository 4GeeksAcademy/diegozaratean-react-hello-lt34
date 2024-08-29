// 1. Importar React
import React, { useState } from "react";
// 2. Crear componente
const Player = ()=>{
    const [backBackground , setBackBackground] = useState('grey')
    const [stopBackground , setStopBackground] = useState('grey')
    const [playBackground , setPlayBackground] = useState('grey')
    const [nextBackground , setNextBackground] = useState('grey')
    // let backBackground = 'grey'

    function back(){
        console.log('pasar a verde boton back')
        if(backBackground == 'green' ){
            setBackBackground('grey')
        }else{
            setBackBackground('green')
            setStopBackground('grey')
            setPlayBackground('grey')
            setNextBackground('grey')
        }
    }

    function play(){
        console.log('pasar a verde boton back')
        if(playBackground == 'green' ){
            setPlayBackground('grey')
        }else{
            setPlayBackground('green')
            setBackBackground('grey')
            setStopBackground('grey')
            setNextBackground('grey')
        }
    }
    function stop(){
        console.log('pasar a verde boton back')
        if(stopBackground == 'green' ){
            setStopBackground('grey')
        }else{
            setStopBackground('green')
            setBackBackground('grey')
            setPlayBackground('grey')            
            setNextBackground('grey')
        }
    }
    function next(){
        console.log('pasar a verde boton back')
        if(nextBackground == 'green' ){
            setNextBackground('grey')
        }else{
            setNextBackground('green')
            setStopBackground('grey')
            setBackBackground('grey')
            setPlayBackground('grey') 

        }
    }
    return(
        <>
            <h1>Player</h1>
            <button style={{ backgroundColor: backBackground}} onClick={back} >Anterior</button>
            <button style={{ backgroundColor: stopBackground}} onClick={stop}>stop</button>
            <button style={{ backgroundColor: playBackground}} onClick={play}>play</button>
            <button style={{ backgroundColor: nextBackground}} onClick={next}>Siguiente</button>
        </>

    )
}
// 3. Exportar componente
export default Player
