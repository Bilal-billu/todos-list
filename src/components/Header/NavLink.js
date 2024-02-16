import React from 'react';

function NavLink(props) {


    return (

        <button
            className='btn btn-transparent border border-1 m-0 m-md-1'
            onClick={()=>props.func()}>
            {props.text}
        </button>

    )
}
NavLink.defaultProps = {
    text: "Nav link here"
}

export default NavLink;