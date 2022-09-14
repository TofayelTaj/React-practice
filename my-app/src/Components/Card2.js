import React, {Component} from "react";
import { FaReact } from "react-icons/fa";
import { Button } from 'react-bootstrap';


class Card2 extends Component {

    constructor(props){
        super(props)

        this.state = {
            count : 0,
            text : ''
        }

    }

    increment = () => {
        console.log("clicked");
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () =>{
        if(this.state.count != 0){
            this.setState({
                count : this.state.count - 1
            })
        }
    }

    handleOnChange = (e) => {
        this.setState({
            text : e.target.value
        })
    }

    render(){
        return <div>
            <h2>hello class Component, {this.props.name}</h2>
            <FaReact className="icon"/>
            <h2>Count : {this.state.count}</h2>
            <Button className="p-3 m-4" onClick={this.increment} variant="warning"> + </Button>
            <Button className="p-3" onClick={this.decrement}> - </Button>
            <br></br>
            <input type="text" onChange={this.handleOnChange}/>
            <p>{this.state.text}</p>
        </div>
    }


}

export default Card2;
