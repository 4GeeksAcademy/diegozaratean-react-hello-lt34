import React from "react";

const SecondsCounter = (props)=>{
    let unidades = props.seconds % 10;
    let decenas = (props.seconds / 10 ) % 10;
    return(
        <>
        
            <h1>SecondsCounter</h1>        
            {props.seconds}
            <p>Unidades : {unidades}</p>
            <p>Decenas : { decenas}</p>
        </>
    )
}

export default SecondsCounter