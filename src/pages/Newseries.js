import NewSeriesForm from '../components/Series/NewSeriesForm';
import {useHistory} from 'react-router-dom';

function Newseries(){

const history = useHistory();

    function addSeries(Singleseries){
    fetch('https://series-259a7-default-rtdb.firebaseio.com/series.json',{
        method :'POST',
        body:JSON.stringify(Singleseries), 
        header:{'Content-Type':'application/json'}  
    }).then(()=>{
        history.replace('/')
       }).catch(err=>{alert(err)});

    }

    return(
    <div>
        <h1> Add New series</h1>
        <NewSeriesForm onAddSeries={addSeries} />
    </div>
    );
}

export default Newseries;