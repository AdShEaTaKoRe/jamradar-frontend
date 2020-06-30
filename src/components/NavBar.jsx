import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Icon, Image } from "semantic-ui-react"

class NavBar extends React.Component {
  render() {
    return (
      <Container className="nav-bar">
          <Menu icon='labeled' fixed="top" fluid style={{ backgroundColor: "#ffff99" }} size="mini">
              <Link className="item" to="/edit">
                <Icon
                  aria-hidden="true"
                  className="edit icon"
                  style={{ color: "teal" }}
                />
                Edit
              </Link>
              <Link className="item" to="/questionnaire">
                <Icon
                  aria-hidden="true"
                  className="user circle icon"
                  style={{ color: "blue" }}
                />
                Preferences
              </Link>
              <Link className="item" to="/candidates">
                <Icon aria-hidden="true" className="headphones icon"/>Musicians
              </Link>
              <Link className="item" to="/matches">
                <Icon
                  aria-hidden="true"
                  className="hand peace icon"
                  style={{ color: "orange" }}
                />
                Matches
              </Link>
              {this.props.email ? (
                <Link className="item" to="/" onClick={this.props.signOut}>
                  <Icon
                    aria-hidden="true"
                    className="minus icon"
                    style={{ color: "red" }}
                  />
                  LogOut
                </Link>
              ) : (
                ""
              )}
              <Image size="tiny" className="logo" src='https://res.cloudinary.com/jamradar/image/upload/c_crop,h_301/v1592840472/Logo.jpg' />

          </Menu>
        </Container>
    );
  }
}

export default NavBar;
