
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navcustom = (props) => {
  return (
    <React.Fragment>
      <Navbar variant="dark" className="color-nav">
        <Link to={'/'}>
        </Link>
        <Search searchTerm={props.searchTerm} onKeyUp={props.onKeyUp} />
        <Nav.Item>
          <h1>HackerNews</h1>
        </Nav.Item>
      </Navbar>
    </React.Fragment>
  );
};

export default Navcustom;