import React from "react";



function Header(){
    return(
        <>
        <div>
            <nav>
                <div className="logo"></div>
                <div className="primary-nav">
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>services</li>
                        <li>testimonials</li>
                    </ul>
                </div>
                <div className="secondary-nav">
                    <a href="">contact us</a>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Header