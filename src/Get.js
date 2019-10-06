import React, { Component } from 'react';

class Get extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number:""
        }
    }

    handle = (event)=>{
        this.setState ({[event.target.name] :event.target.value})
    }

    submit = (event)=>{
        alert(JSON.stringify(this.state))
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submit}>
                    <label></label>
                    <br></br>
                    <input type="text" name="number" value={this.state.number}  onChange={this.handle} placeholder="Enter number">

                    </input>
                </form>
            </div>
        );
    }
}

export default Get;