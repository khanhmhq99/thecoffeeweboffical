import React, { Component } from 'react'
import { signUpRequest } from '../../store/actions/authAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    state = {
        username: '',
        password: '',
        fullname: '',
        address: '',
        phoneNumber: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.signUp(this.state)
        console.log(this.props)
    }
    render() {
        const { user, authError } = this.props;

        if (user.token) return <Redirect to="/" />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input type="text" id="phoneNumber" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn orange darken-1 z-depth-0">Sign up</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials) => (
            dispatch(signUpRequest(credentials))
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)