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
            <a href="/"><li>Inicio</li></a>
            <a href=""><li>Sobre de Nosotros</li></a>
            <a href=""></a><li>Tienda</li>
            <a href=""></a><li>Ayuda</li>
            <a href=""></a><li>Logueo</li>
        </div>
        <div className={styles.list}>
          <ul>Empresa</ul>
            <a href=""></a><li>La Empresa</li>
        </div>
        <div className={styles.list}>
          <ul>Conocenos</ul>
            <a href=""></a><li>El Equipo</li>
            <a href=""></a><li>Nuestra Historia</li>
        </div>
        <div className={styles.list}>
          <ul>Encuentranos</ul>
            <a href="Facebook"><li>Facebook</li></a>
            <a href="Twitter"><li>Twitter</li></a>
            <a href="Instagram"><li>Instagram</li></a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
