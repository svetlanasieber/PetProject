import { NavLink } from "react-router-dom";

const CategoriNavigation = (x) => (
    <nav className="navbar">
        <ul>
            <li><NavLink to="/categories/All">All</NavLink></li>
            <li><NavLink to="/categories/Cat">Cats</NavLink></li>
            <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
            <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
            <li><NavLink to="/categories/Reptile">Reptiles</NavLink></li>
            <li><NavLink to="/categories/Other">Other</NavLink></li>
        </ul>
        <style jsx>{`nav ul li a.active{background-color:rosybrown;}`}</style>
    </nav>
);
export default CategoriNavigation;