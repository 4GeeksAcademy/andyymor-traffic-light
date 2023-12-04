import React, { useState } from "react";



//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="traffic-light">
			
			<div
			onClick={() => selectedColor("red")} 
			className={
				"light red"+(selectedColor === "red" ? " glow" : "") 
			}></div>
			
			<div 
			onClick={() => selectedColor("yellow")}
			className={ "light yellow"+(selectedColor === "yellow" ? " glow" : "")
		}> </div>
			
			<div 
			onClick={() => selectedColor("green")}
			className={"light green"+(selectedColor === "green" ? " glow" : "")
			}> </div>
			
			</div>
	);
};

export default Home;
