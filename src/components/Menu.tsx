import { NavLink } from 'react-router-dom';

const Menu = () => {
    const classSelected = ({isActive}: {isActive: boolean}) => isActive ? 'menu__item menu__item-active' : 'menu__item';
  
    return (
      <nav className="menu">
        <NavLink to="/" className={classSelected}>Главная</NavLink>
        <NavLink to="/drift" className={classSelected}>Дрифт-такси</NavLink>
        <NavLink to="/timeattack" className={classSelected}>Time Attack</NavLink>
        <NavLink to="/forza" className={classSelected}>Forza Karting</NavLink>
      </nav>
    );
}

export default Menu;