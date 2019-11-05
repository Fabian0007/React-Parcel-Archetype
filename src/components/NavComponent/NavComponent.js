import React from 'react';
import PropTypes from 'prop-types';
import image from './static/img/logo.png';

const propTypes = {
  messages: PropTypes.shape(
    {
      navBarMessage: PropTypes.string.isRequired,
    },
  ).isRequired,
};

const NavComponent = ({ messages }) => {
  const { navBarMessage } = messages;
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="nav-item">
          <img width="40" src={image} alt="" />
          <h4>{navBarMessage}</h4>
        </div>
      </div>
    </nav>
  );
};

NavComponent.propTypes = propTypes;

export default NavComponent;
