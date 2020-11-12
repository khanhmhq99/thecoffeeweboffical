import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'
const Navbar = (props) => {
    const { user } = props

    const link = (user.token) ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav>
            <div className="nav-wrapper black">
                <div className="container">
                    <Link to="/" className="brand-logo">THE COFFEE SHOP</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {link}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(Navbar)
