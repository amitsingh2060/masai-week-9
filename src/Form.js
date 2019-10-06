import React, { Component } from 'react';
import './Form.css'



class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: "enter your name",
            email: "enter your email id",
            phone: "number",
            message: "detail"
        }
    }

   
    handelAll = (event) => {
              this.setState ({[event.target.name] :event.target.value})
    }

    handelsubmit = (event) => {
        
        alert(JSON.stringify(this.state))
        event.preventDefault();
    }



    render() {
        return (
            <div className="Form">
                <form onSubmit={this.handelsubmit}>

                    <label>Name</label> <br />
                    <input type="text" name="fullname" value={this.state.fullname}
                        onChange={this.handelAll} /> <br />

                    <label>Email</label><br />
                    <input type="email" name="email" value={this.state.email}
                        onChange={this.handelAll} /> <br />

                    <label>Mobile</label><br />
                    <input type="text" name="phone" value={this.state.phone}
                        onChange={this.handelAll} /> <br />

                    <label>Message</label><br />
                    <textarea  name="message" value={this.state.message}
                        onChange={this.handelAll} /> <br />

                    <input type="submit" value="send" />
                </form>
            </div>
        );
    }
}

export default Form;