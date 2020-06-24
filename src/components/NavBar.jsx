import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react"

class NavBar extends React.Component {
  render() {
    return (
      <Container className="nav-bar">
          <Menu fixed="top" fluid={true}>
            <div
              className="ui fluid labeled icon menu"
              style={{ backgroundColor: "#ffff99" }}
            >
              <Link className="item" to="/edit">
                <i
                  aria-hidden="true"
                  className="edit icon"
                  style={{ color: "teal" }}
                ></i>
                Edit
              </Link>
              <Link className="item" to="/questionnaire">
                <i
                  aria-hidden="true"
                  className="user circle icon"
                  style={{ color: "blue" }}
                ></i>
                Preferences
              </Link>
              <Link className="item" to="/candidates">
                <i aria-hidden="true" className="headphones icon"></i>Musicians
              </Link>
              <Link className="item" to="/matches">
                <i
                  aria-hidden="true"
                  className="hand peace icon"
                  style={{ color: "orange" }}
                ></i>
                Matches
              </Link>
              {this.props.email ? (
                <Link className="item" to="/" onClick={this.props.signOut}>
                  <i
                    aria-hidden="true"
                    className="minus icon"
                    style={{ color: "red" }}
                  ></i>
                  Log Out
                </Link>
              ) : (
                ""
              )}
            </div>
          </Menu>
        </Container>
    );
  }
}

export default NavBar;
