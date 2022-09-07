
const userName = "tofayel ahmed";
const address = "Badda, Dhaka";

function Card(){
 
 return <div className="card">
            <div className="cardTitle">
                <h1>{userName}</h1>
            </div>
            <div className="cardBody">
                 <p>
                     {address}
                </p>
            </div>
        </div>

 }

export default Card;
