import React from "react";
import './Loader.scss'
import Spinner from "react-bootstrap/Spinner";


const Loader = (props) => {
    return (
        <div className="Loader">

            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />

            <h4>{props.text}</h4>

        </div>
    );
};

export default Loader;