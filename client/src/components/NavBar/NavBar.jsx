import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../media/LogoEstiloPropio.png";
import { useDispatch, useSelector } from "react-redux";
import {
  //filterProductsByCategories,
  getCategories,
  getProducts,
} from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getProducts());
  }
  let rangos=["0-500","501-1000","1001-1500","1501-2000","2001-2500"];
  //   function handleFilterCategories(e) {
  //     dispatch(filterProductsByCategories(e.target.value));
  //   }
  return (
    <nav>
      <div className={styles.container}>
        <img src={Logo} alt="logo" />
        <div>
          <SearchBar />
          <select
            className={styles.select}
            //onChange={(e) => handleFilterCategories(e)}
          >
              <option value="all_categories">Categorias Todas</option>
            {categories.map((cat) => (
              <option value={cat._id} key={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <select
            className={styles.select}
            //onChange={(e) => handleFilterCategories(e)}
          >
              <option value="rango">Precios</option>
            {rangos.map((rango) => (
              <option >
                {rango}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.container_links}>
          <div className={styles.links}>
            <NavLink className={styles.link_text} to="/">
              Inicio
            </NavLink>
            <NavLink className={styles.link_text} to="/about">
              Sobre de Nosotros
            </NavLink>
            <NavLink className={styles.link_text} to="/shop">
              Tienda
            </NavLink>
            <NavLink className={styles.link_text} to="/help">
              Ayuda
            </NavLink>
            <NavLink className={styles.link_text} to="/login">
              Logueo
            </NavLink>
          </div>
          <NavLink className={styles.link_cart} to="/cart">
            <button>🛒 Tu Carrito</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
