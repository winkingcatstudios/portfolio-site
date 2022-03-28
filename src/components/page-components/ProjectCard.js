import { useContext } from "react";

import classes from "./ProjectItem.module.css";
import FavoritesContext from "../../store/favorite-context";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { cyan, deepPurple, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        type: props.type,
        image: props.image,
        gitLink: props.gitLink,
        shortDescription: props.shortDescription,
        longDescription: props.longDescription,
      });
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: cyan[300], color: deepPurple[900] }}
            aria-label="project"
          >
            {props.type[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.type}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={toggleFavoriteStatusHandler}
          aria-label="add to favorites"
        >
          {/* {console.log(favoritesCtx.favorites.some((element) => props.id === element.id))} */}

          {itemIsFavorite ? (
            <FavoriteIcon style={{ color: red[800] }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
        <IconButton
          onClick={() => {
            window.open(props.gitLink);
          }}
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More Details</Typography>
          <Typography paragraph>{props.longDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
