import classes from "./CardOld.module.css";

function CardOld(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default CardOld;
