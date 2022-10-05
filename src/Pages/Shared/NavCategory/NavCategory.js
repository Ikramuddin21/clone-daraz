import React from 'react';
import { Link } from 'react-router-dom';
import { navCategory } from '../../../temp/data';
import './NavCategory.css';

const NavCategory = () => {
    return (
        <div className="nav-category">
            <ul className="nav-category-lists">
                {
                    navCategory.map((category, index) => <li className="nav-category-item" key={index}>
                        <Link to="/">{category}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default NavCategory;