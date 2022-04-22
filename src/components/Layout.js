import React from 'react';
import NavBar from "./NavBar"; 

export default function Layout({children}) {

    return (
        <div>
            <NavBar/>
            {children}
            <footer>
                <small>
                    powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                </small>
            </footer>
        </div>
    )

}