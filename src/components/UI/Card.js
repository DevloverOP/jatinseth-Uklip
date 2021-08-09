import classes from '../UI/Card.module.css';

function Card(props){

  return(
      <div className={classes.cardmodel}>
          {props.children}
      </div>
  );

}
export default Card;