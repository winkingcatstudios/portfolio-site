import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Logo from "../ui/Logo";
import FavoritesContext from "../../store/favorite-context";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Icon>
          <Logo />
        </Icon>
        <Typography variant="h4" className={classes.title}>
          Winking Cat Studio
        </Typography>
        
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/about-this-site">About This Site</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
