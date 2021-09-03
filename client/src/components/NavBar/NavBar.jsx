import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import Logo from "../../media/LogoEstiloPropio.png"


const NavBar = () => {
    return (
        <nav>
            <div className={styles.container}><img src={Logo} alt="logo" />
            <SearchBar/>
            <div className={styles.container_links}>
                <div className={styles.links}>
                <NavLink className={styles.link_text} to="/">Inicio</NavLink>
                <NavLink className={styles.link_text} to="/About">Acerca de Nosotros</NavLink>
                <NavLink className={styles.link_text} to="/Shop">Tienda</NavLink>
                <NavLink className={styles.link_text} to="/Help">Ayuda</NavLink>
                <NavLink className={styles.link_text} to="/Login">Logueo</NavLink>
                </div>
                <NavLink className={styles.link_cart} to="/Cart"><button>🛒 Tu Carrito</button></NavLink>
            </div>
            </div>
        </nav>
    )
}

export default NavBar
