import React from "react";
import { useCustomHookForContext } from "../../context/UserContext";

function Footer() {
    const name = useCustomHookForContext();
    return (
        <footer
        className="position-sticky bottom-0 w-100 bg-black text-light">
            <p>I am {name}</p>
        </footer>
    );
}

export default Footer;