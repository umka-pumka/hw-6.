import React from 'react'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav} >
        <div className={classes.back}>
          <FontAwesomeIcon className={classes.onback} icon={faCircleLeft} style={{ color: "#a3abb8", }} />

        </div>
        <div className={classes.input}>
          <input type="text" placeholder='Search' />
          <FontAwesomeIcon className={classes.search} icon={faSearch} />

        </div>

        <FontAwesomeIcon icon={faBell} className={classes.fabell} style={{ color: "#a3abb8", }}  />        <div>

        </div>
      </nav>


      <Outlet />
    </header>
  )
}

export default Header