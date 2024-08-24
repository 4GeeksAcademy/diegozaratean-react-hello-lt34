import React from "react";

// 4. Importar componente
import Nav from "./nav"; 
import Jumbotron from "./jumbotron";
import Boton from "./boton";
// 5. Usar componente


const Home = () => {
	return (
		<div className="text-center">
			<Nav/>
			<Jumbotron />

			<h1 className="text-center mt-5">Bienvenidos a React ;) 123</h1>
			<Boton />
		</div>
	);
};

export default Home;
