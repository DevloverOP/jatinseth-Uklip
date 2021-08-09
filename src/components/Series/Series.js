import Seriesitem from './Seriesitem';



function Series(props){
    
return(
    <div>
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



















