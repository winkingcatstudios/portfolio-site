import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Dan Kercher</div>
      <nav>
        <ul>
          <li>
              <Link to='/'>About Me</Link>
          </li>
          <li>
              <Link to='/about-this-site'>About This Site</Link>
          </li>
          <li>
              <Link to='/projects'>Projects</Link>
          </li>
          <li>
              <Link to='/favorites'>Favorites</Link>
          </li>
          <li>
              <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
