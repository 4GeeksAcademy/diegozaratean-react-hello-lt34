import React from "react";

const Card  = (props)=>{
    console.log(props)     
    return(
        <div className="card" style={{width: "18rem"}}  >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.autor}</p>
                <a href="#" className="btn btn-primary">Ver {props.episodios } episodios </a>
            </div>
        </div>
    )
}

export default Card