import React from "react";
import Logo from "../../media/LogoEstiloPropio.png"
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="Logo" />
        <div className={styles.links}>
        <div className={styles.list}>
          <ul>Menu</ul>
            <li>Inicio</li>
            <li>Sobre de Nosotros</li>
            <li>Tienda</li>
            <li>Ayuda</li>
            <li>Logueo</li>
        </div>
        <div className={styles.list}>
          <ul>Empresa</ul>
            <li>La Empresa</li>
        </div>
        <div className={styles.list}>
          <ul>Conocenos</ul>
            <li>El Equipo</li>
            <li>Nuestra Historia</li>
        </div>
        <div className={styles.list}>
          <ul>Encuentranos</ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
