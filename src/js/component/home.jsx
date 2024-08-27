import React from "react";

// 4. Importar componente
import Nav from "./nav"; 
import Jumbotron from "./jumbotron";
import Boton from "./boton";
import Card from "./card";
// 5. Usar componente


const Home = () => {
	return (
		<div className="text-center">
			<Nav/>
			<Jumbotron />

			<h1 className="text-center mt-5">Bienvenidos a React ;) 123</h1>
			<Boton />
			<Card titulo="one piece" autor='Eiichirō oda' episodios='1200' />			
			<Card titulo="my hero academia" autor='horikoshi' episodios='95' />			
			<Card titulo="baki" autor='keysuke' episodios='34' />			
		</div>
	);
};

export default Home;
