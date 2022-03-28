import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import FavoritesBadge from "../ui/FavoritesBadge";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: "bold",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo />
            &nbsp;Winking Cat Studios
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu-icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link className={classes.navItem} to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                    textAlign="center"
                  >
                    About
                  </Typography>
                </MenuItem>
              </Link>
              <Link className={classes.navItem} to="/skills">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                    textAlign="center"
                  >
                    Skills
                  </Typography>
                </MenuItem>
              </Link>
              <Link className={classes.navItem} to="/projects">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                    textAlign="center"
                  >
                    Projects
                  </Typography>
                </MenuItem>
              </Link>
              <Link className={classes.navItem} to="/favorites">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                    textAlign="center"
                  >
                    <FavoritesBadge />
                  </Typography>
                </MenuItem>
              </Link>
              <Link className={classes.navItem} to="/contact">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                    textAlign="center"
                  >
                    Contact
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Logo />
            &nbsp;Winking Cat Studios
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link className={classes.navItem} to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  fontWeight: "bold",
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                About
              </Button>
            </Link>
            <Link className={classes.navItem} to="/skills">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  fontWeight: "bold",
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Skills
              </Button>
            </Link>
            <Link className={classes.navItem} to="/projects">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  fontWeight: "bold",
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Projects
              </Button>
            </Link>
            <Link className={classes.navItem} to="/favorites">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  fontWeight: "bold",
                  my: 1.9,
                  color: "white",
                  display: "block",
                }}
              >
                <FavoritesBadge />
              </Button>
            </Link>
            <Link className={classes.navItem} to="/contact">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  fontWeight: "bold",
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Contact
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
