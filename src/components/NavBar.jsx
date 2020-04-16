import React from "react"
import { Link } from "react-router-dom"

class NavBar extends React.Component {





    render () {
        return (
         <div className="ui top fixed menu" >
            <div className="ui fluid labeled icon menu" style={{backgroundColor: "#ffff99"}}>
            <Link className="item" to="/edit"><i aria-hidden="true" className="edit icon" style={{color: "teal"}}></i>Edit</Link>
            <Link className="item" to="/questionnaire"><i aria-hidden="true" className="user circle icon" style={{color: "blue"}}></i>Preferences</Link>
            <Link className="item" to="/candidates"><i aria-hidden="true" className="headphones icon"></i>Musicians</Link>
            <Link className="item" to="/matches"><i aria-hidden="true" className="hand peace icon" style={{color: "orange"}}></i>Matches</Link>
            {(this.props.email) ? (<Link className="item" to="/" onClick={this.props.signOut}><i aria-hidden="true" className="minus icon" style={{color: "red"}}></i>Log-Out</Link>) : ""}
            </div>
        </div>
        )
    }
}

export default NavBar