import React from "react";

// 4. Importar componente
import Nav from "./nav"; 
// 5. Usar componente


const Home = () => {
	return (
		<div className="text-center">
			<Nav/>

			<h1 className="text-center mt-5">Bienvenidos a React ;) 123</h1>
		</div>
	);
};

export default Home;
