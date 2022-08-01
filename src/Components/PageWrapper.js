import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { Footer } from "./Common/Footer";
import { auth } from "./firebase";
import { actionTypes } from "../reducer";

export const PageWrapper = (props) => {

    const [{user}, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) {
            signOut(auth);
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: []
            });
            dispatch({
                type: actionTypes.SET_USER,
                user: null,
              });
        }
    }

    return (
    <div>
        <header>
            <h1 className="site-heading text-center text-faded d-none d-lg-block">
                <span className="site-heading-upper text-primary mb-3">Andrea Preisz</span>
                <span className="site-heading-lower">Bienvenida</span>
            </h1>
        </header>
        
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <Link className="navbar-brand text-uppercase fw-bold d-lg-none" to="/">Start Bootstrap</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/">Sobre nosotros</Link></li>   
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/products">Productos</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/store">Tienda</Link></li>
                        <li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/signin" onClick={handleAuth}>{user ? 'Cerrar sesión' : 'Inicia sesión'}</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {props()}
        <Footer/>
    </div>
)};