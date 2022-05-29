import React from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/createAccount.css';



class CreateAccount extends React.Component {

    state = {
        name: "",
        email: "",
        password: ""
    };


    createAccount = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.email,
            this.state.password);
    }


    render() {
        return (

            <div className="App">
                <form className="create-form" onSubmit={this.createAccount}>
                    <div className=" form-inner">
                        <h2>New Account</h2>
                        <div className="form-group">
                            <label htmlFor="exampleInputText">Username</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="text" placeholder="Enter Username" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Create Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Create Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>
                        <input type="submit" value="CREATE" className="create-button" />
                        <Link className="create-link" to='/'>Home</Link>
                    </div>
                </form>

            </div>
        )
    }

}

export default CreateAccount;