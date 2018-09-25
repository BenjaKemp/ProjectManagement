import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container">
    <h1 className="header__title">Lets make a combo</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Assign new </NavLink>
    </div>
  </header>
);

export default Header;
