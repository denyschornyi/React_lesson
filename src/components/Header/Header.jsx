import React from 'react';
import classes from  './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
          <img src="https://i.pinimg.com/originals/7f/82/95/7f8295ce096fbca031c27c788a3ff8c3.jpg" alt="logo"/>
      </header>
    );
}

export default Header;