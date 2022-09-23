import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";
import MesaVerde from "./parks/MesaVerde";

ReactDOM.render(
	[<ColoradoStateParks />, <MesaVerde />],
	document.getElementById("root")
);
