import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./Nav";
import { Body } from "./Body";
import { Form } from "./Form";
import "./index.css";

const Website = () => {

    return (
        <>
            <Nav />
            <Body />
            <Form />
        </>
    )
}

export { Website }