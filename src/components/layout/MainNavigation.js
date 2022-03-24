import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorite-context'

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Winking Cat Studio</div>
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
              <Link to='/favorites'>
                Favorites
                <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                </Link>
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
