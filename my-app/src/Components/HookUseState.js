import React, {useState} from "react";
import { Button } from "react-bootstrap";


function HookUseState(){

    const [count, setCount1] = useState(0);

    const incrementFunc = () =>{
        setCount1(count + 1)
    }

    const decrementFunc = () =>{
        if(count != 0){
            setCount1(count -1)
        }
        
    }

    return <div>
        <h2>Hello Hooks use state </h2>
        <h1>Count : {count}</h1>
        <Button variant="success" className="m-2" onClick={incrementFunc}>Increment</Button>
        <Button variant="warning" className="m-2" onClick={decrementFunc}>Decrement</Button>

    </div>
}

export default HookUseState;