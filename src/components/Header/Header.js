import React from 'react';
import Navbar from "./Navbar";

function Header(props)
{
    return(
        <header
        className="d-flex flex-row justify-content-between p-3 py-1">
            <div
            className="d-flex flex-row justify-content-start align-items-center">
                <h1>
                {props.title}
                </h1>
            
            </div>
            <Navbar />
        </header>
    )
}

Header.defaultProps={
    title: "Title here"
};

export default Header;