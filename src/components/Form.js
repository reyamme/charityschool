import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import axios from "axios"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            FullName: '',
            username: '',
            email: '',
            password: '',
            letter: ''
        }
        this.changefullname = this.changefullname.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeLetter = this.changeLetter.bind(this)
        this.onSubmit = this.onSubmit.bind(this)



    }
    changefullname(event) {
        this.setState({
            FullName: event.target.value
        })
    }
    changeUserName(event) {
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    changeLetter(event) {
        this.setState({
            letter: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()

        const registered = {
            FullName: this.state.FullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            letter: this.state.letter

        }
        axios.post('http://localhost:8000/app/signup', registered)
            .then(response => console.log(response.data))

        // this.setState({
        //     FullName: '',
        //     username: '',
        //     email: '',
        //     password: '',
        //     letter: ''

        // })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                                placeholder="Full Name"
                                onChange={this.changefullname}
                                value={this.state.FullName}
                                className="form-control form-group"></input>

                            <input type="text"
                                placeholder="Full Username"
                                onChange={this.changeUserName}
                                value={this.state.username}
                                className="form-control form-group"></input>

                            <input type="text"
                                placeholder="Full Email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group"></input>
                            <input type="password"
                                placeholder="Password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group"></input>
                            <input type="text"
                                placeholder="Your Letter"
                                onChange={this.changeLetter}
                                value={this.state.letter}
                                className="form-control form-group"></input>
                            <input type="submit" className="btn btn-danger btn-block" value="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form;