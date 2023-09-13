import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

const Header = ({ setToggle, toggle }) => {
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header>
        <Link to={"/"} className="bg-logo">
          <img className="logo" src="/logo.png" alt="" />
        </Link>
        <Link to={"/"}>
          <h1>Exa SMP</h1>
        </Link>

        {toggle ? (
          <MdClose
            className="close-menu-icon"
            size={30}
            onClick={handleToggle}
          />
        ) : (
          <FiMenu className="menu-icon" size={30} onClick={handleToggle} />
        )}
      </header>
      <aside className={toggle ? "menu show" : "menu"}>
        <NavLink
          onClick={handleToggle}
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "selected" : "not-selected"
          }
        >
          Fechas
        </NavLink>
        <hr />
        <NavLink
          onClick={handleToggle}
          to={"/equipos"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "selected" : "not-selected"
          }
        >
          Equipos
        </NavLink>

        <hr />
        <NavLink
          onClick={handleToggle}
          to={"/clasificacion"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "selected" : "not-selected"
          }
        >
          Clasificación
        </NavLink>
        <hr />
        <NavLink
          onClick={handleToggle}
          to={"/comunidad"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "selected" : "not-selected"
          }
        >
          Comunidad
        </NavLink>
        <hr />
        <Link className="not-selected" to={"https://www.instagram.com/exasmp/"}>
          <BsInstagram className="ig-icon" size={20} color="#000" />
          Instagram
        </Link>
      </aside>
    </>
  );
};

export default Header;
