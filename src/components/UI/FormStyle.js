import classes from './FormStyle.module.css';

function FormStyle(props){
return (
   <div className={classes.myform }>
       {props.children}
   </div>
);
}
export default FormStyle;