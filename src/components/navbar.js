

// import './App.css';
import { AiFillAlipayCircle } from "react-icons/ai";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <header className="navBar">
                <div>
                    <h1 className="logo"><AiFillAlipayCircle /></h1>
                </div>
                <div className='menu'>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink> </li>
                            <li><NavLink to="/Services">Services</NavLink></li>
                            <li><NavLink to="/About">About me</NavLink></li>
                            <li><NavLink to="/Contact">contact</NavLink> </li>
                        </ul>

                    </nav>


                    {/* <ul>
                    <li>Home </li>
                    <li>Services</li>
                    <li>About me</li>
                    <li>contact</li>
                </ul> */}

                </div>
            </header>

        </>


    )

}


export default Navbar