import React from "react";
import Logo from "../../media/LogoEstiloPropio.png"
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="Logo" />
        <div className={styles.links}>
        <div className={styles.list}>
          <ul>Menu</ul>
            <NavLink to="/"><li>Inicio</li></NavLink>
            <NavLink to="/about"><li>Sobre de Nosotros</li></NavLink>
            <NavLink to="/shop"><li>Tienda</li></NavLink>
            <NavLink to="/help"><li>Ayuda</li></NavLink>
            <NavLink to="/login"><li>Logueo</li></NavLink>
        </div>
        <div className={styles.list}>
          <ul>Empresa</ul>
            <NavLink to="/company"><li>La Empresa</li></NavLink>
        </div>
        <div className={styles.list}>
          <ul>Conocenos</ul>
            <NavLink to="/team"><li>El Equipo</li></NavLink>
            <NavLink to="/our"><li>Nuestra Historia</li></NavLink>
        </div>
        <div className={styles.list}>
          <ul>Encuentranos</ul>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><li>Facebook</li></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><li>Twitter</li></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><li>Instagram</li></a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
