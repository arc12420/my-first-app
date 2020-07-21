import React, {Component} from 'react';

class StatefulClass extends Component {
    constructor(){
        super();
            this.state = {
                greeting: 'Are you my grandma',
                name: 'Marty'
            }
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        })
    }


    render(){
        return(
        <div>
            <h1> Hi! I am a class Component</h1>
            <h2>{this.state.greeting} {this.state.name}?</h2>
            <input name='name' value ={this.state.name} onChange={(e) => this.handleChange(e)}/>
            </div>
        )}
}
export default StatefulClass;























