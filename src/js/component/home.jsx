import React, { useState } from "react";

const Home = () => {
	//const [nombre variable, funcion que me permite modificar variable] = useSate(valor inicial variable)
	const [marli , setMarli] = useState(0)
	const [total , setTotal] = useState(0)
	let count = 5


	function quitar(){
		setMarli(marli-1)
		setTotal(total + 1)
	}

	function agregar(){
		console.log('agregar')
		console.log(count)
		count = count + 1 
		console.log(count)
		// marli = 10 
		setMarli(marli+1)
		setTotal(total + 1)
		// setMarli(x) ====> marli = x
		// marli++ ======> marli = marli + 1
		// setMarli(marli++) ====> marli = marli++
		// setMarli(marli++) ====> marli = marli = marli + 1
		// setMarli(marli++)
	}
	return (
		<div className="text-center">


			<h1 className="text-center mt-5">Bienvenidos a React ;) 123</h1>		
			<h1>{count}</h1>
			<button onClick={agregar}>Agregar</button>
			<h1>{marli}</h1>
			<button onClick={quitar}>Quitar</button>

			<p>utilizaste nuestra app {total} veces</p>
		</div>
	);
};

export default Home;
