import Seriesitem from './Seriesitem';
import './Seriesitem.css';

function Series(props){
 
return(
    <div className='content'>
        
      {props.data.map((seriesItem)=>{
        return <Seriesitem
         key={seriesItem.id}
         id={seriesItem.id}
         title ={seriesItem.title}
         description ={seriesItem.description}
         imageurl ={seriesItem.imageurl}
         />
         }) }
         
    </div>
);

}
export default Series;



















