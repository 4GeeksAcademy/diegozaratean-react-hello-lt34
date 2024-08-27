//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondscounter.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'))

setInterval(myCallback, 1000);
let segundos = 100

function myCallback() {
    // Your code here
    // Parameters are purely optional.
    console.log('paso un segundo')
    console.log(segundos)
    segundos++
    //render your react application
    root.render(<SecondsCounter seconds={segundos}/>);
}

