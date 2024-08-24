// 1. Importar React
import React from "react";

// 4. Importar componente
import Boton from "./boton";

// 2. Crear componente
const Jumbotron = () => {
    return(
        <>
            <div className="container my-5">
                <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                    <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                    <svg className="bi mt-5 mb-3" width="48" height="48"><use xlinkHref="#check2-circle"></use></svg>
                    <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
                    <p className="col-lg-6 mx-auto mb-4">
                    This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                    </p>
                    <Boton />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae delectus autem tempora minus consectetur? Nisi rerum ratione exercitationem? Ipsa libero nam atque cupiditate vel qui id. Quam sit et pariatur.</p>
                    <Boton />
                    
                    <Boton />
                </div>
            </div> 
        </>
    )
}
// 3. Exportar componente
export default Jumbotron



