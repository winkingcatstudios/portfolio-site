import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import FavoritesContext from "../../store/favorite-context";
import { useContext } from "react";

const styles = (theme) => ({
  customBadge: {
    backgroundColor: (props) => props.color,
    color: "#321b6c",
    fontWeight: "bold"
  }
});

function SimpleBadge(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const { classes } = props;
  return (
    <div>
      <Badge
        classes={{ badge: classes.customBadge }}
        className={classes.margin}
        badgeContent={favoritesCtx.totalFavorites}
      >
        Favorites&nbsp;
      </Badge>
    </div>
  );
}
const StyledBadge = withStyles(styles)(SimpleBadge);

const Demo = () => {
  return (
    <>
      <StyledBadge color="#71e1e1" />
    </>
  );
};

export default Demo;