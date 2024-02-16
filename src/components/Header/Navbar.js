import React from 'react'
import NavLink from './NavLink'
import { useMainContent } from '../../context/DisplayContentContext'

function Navbar()
{
    var {addOnly, listOnly, bothListAdd, aboutOnly} = useMainContent();

    const navBarLinksArray=[
        {
            text:"Home",
            path:"/",
            func:bothListAdd
        },
        {
            text:"Todos List",
            path:"/list",
            func:listOnly
        },
        {
            text:"Add Todo",
            path:"/add-new",
            func:addOnly
        },
        {
            text: "About",
            path:"/about",
            func:aboutOnly
        }
    ]
    return(
        <div
        className='d-flex flex-row align-items-center justify-content-between px-2'>
            {
                navBarLinksArray.map((obj, index)=>{
                    return (
                        <NavLink text={obj.text} path={obj.path} key={index} func={obj.func} />
                    )
                })
            }
        </div>
    )

}

export default Navbar;