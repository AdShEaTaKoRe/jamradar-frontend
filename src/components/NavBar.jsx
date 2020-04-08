import React from "react"
import { Link } from "react-router-dom"

class NavBar extends React.Component {





    render () {
        return (
            <>
            <Link to="/edit">Edit Profile</Link>-
            <Link to="/questionnaire">Preferences</Link>-
            <Link to="/candidates">Musicians</Link>-
            <Link to="/matches">Matches</Link>-
            <Link to="/" onClick={this.props.signOut}>Sign-Out</Link>
            </>
        )
    }
}

export default NavBar