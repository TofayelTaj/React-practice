import React from "react";



// const userName = "tofayel ahmed";
// const address = "Badda, Dhaka";

function Card(props){

    const {name, address} = props;
  
 
 return <div className="card">
            <div className="cardTitle">
                <h1> {name} </h1>
            </div>
            <div className="cardBody">
                 <p>
                    {address}
                </p>
            
            </div>
        </div>
 }

export default Card;
