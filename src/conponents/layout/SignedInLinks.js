import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authAction'
const SignedInLinks = (props) => {
    return (
        <div>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/category">Category</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1" >MK</NavLink></li>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)