import React, {Component} from "react";
import { FaReact } from "react-icons/fa";
import { Button } from 'react-bootstrap';


class Card2 extends Component {

    render(){
        return <div>
            <h2>hello class Component, {this.props.name}</h2>
            <FaReact className="icon"/>
            <Button variant="warning"> Learn More</Button>
        </div>
    }


}

export default Card2;
