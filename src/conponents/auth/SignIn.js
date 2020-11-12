import React, { Component } from 'react'
import { logInRequest } from '../../store/actions/authAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

class SignIn extends Component {
    state = {
        username: '',
        password: ''
    }

    // componentDidMount() {

    // }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.signIn(this.state)
        console.log(this.props)
    }

    responseGoogle = (res) => {
        console.log(res)
        console.log(res.tokenId)
        console.log(res.accessToken)
    }

    render() {
        let { user, authError } = this.props;
        // console.log(user.token)
        if (user.token) return <Redirect to="/" />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Login</h5>
                            <div className="input-field">
                                <label htmlFor="username" >Username</label>
                                <input type="text" id="username" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password" >Password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <div className="row">
                                    <button className="btn orange darken-1 z-depth-0">Login</button>
                                    {/* <GoogleLogin className="col s12"
                                        clientId="337728295576-pk72lofei65smnvup7bqojru23qq142h.apps.googleusercontent.com"
                                        buttonText="Login with Google"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                    /> */}
                                </div>

                                <div className="red-text center">
                                    {authError ? <p> {authError}</p> : null}
                                </div>
                            </div>


                </form>
            </div >
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
        signIn: (credentials) => (
            dispatch(logInRequest(credentials))
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
