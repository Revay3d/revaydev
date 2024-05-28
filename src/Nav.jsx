import React from 'react';
import './assets/stylesheets/Nav.scss';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export default function Nav() {
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);

    // No olvides limpiar el evento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={`nav `}>
      <h1 className='nav__logo'>RevayDev</h1>
      <ul className={`nav__menu ${menuToggle ? 'active' : ''}`}>
        <li><NavHashLink to="/#">Inicio</NavHashLink></li>
        <li><NavHashLink to="/#sobre_mi">Sobre mi</NavHashLink></li>
        <li><NavHashLink to="/#proyectos">Proyectos</NavHashLink></li>
        <li><NavHashLink to="/#Contacto" id='contacto'>Contacto</NavHashLink></li>
      </ul>
      <span className={`menu--toggle ${menuToggle ? 'mostrar_x' : ''}`} onClick={() => setMenuToggle(!menuToggle)}>
        <span className='barra1'></span>
        <span className='barra2'></span>
        <span className='barra3'></span>
      </span>
    </nav>

<div className={`nav__menu--fondo ${scroll ? 'nav--scroll' : ''} ${menuToggle ? 'active-fondo' : ''}`}></div>

</>
  );
}
