import logo from "../images/logo192.png";
import './navbar.css';

const Navbar = () => {

    const url = "https://navbar-coderhouse.vercel.app/"
  return (
    <div className="contenedor-navbar">
      <div className="logo">
        <a href={url}>
        <img src={logo} alt="" />
        <h1>Navbar Coderhouse</h1>
        </a>
      </div>
      <div className="listado-rutas">
        <ul className="lista">
          <li>
            <a href={url}>Inicio</a>
            </li>
          <li>
            <a href={url}>Productos</a>
            </li>
          <li>
            <a href={url}>FAQ</a>
            </li>
          <li>
            <a href={url}>Planes</a>
            </li>
          <li>
            <a href={url}>Contacto</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
