import {useEffect,useState} from 'react';
import Series from '../components/Series/Series';
const sd=[
    {
        id:1,
        imageurl:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMpWgFcYiV0MThcMMAVihr_5Zx2twoZ2Q_kVZOsVZ9nH1hmJZj",
        title:"Friends",
        description:'this is first series'
    },
    {
        id:2,
        imageurl:"https://resizing.flixster.com/rsCbfa9BcKUs-2T5aZHMm4VyOtw=/206x305/v1.dDsyODUyMjI7ajsxODgxMzsxMjAwOzE1MzY7MjA0OA",
        title:"New Girl",
        description:'this is second series'
    },
    {
        id:3,
        imageurl:"https://images.pexels.com/photos/2304123/pexels-photo-2304123.jpeg?cs=srgb&dl=pexels-ron%C3%AA-ferreira-2304123.jpg&fm=jpg",
        title:"Bat-Man",
        description:'this is Third series'
    },
    {
        id:4,
        imageurl:'https://source.unsplash.com/200x200/?spiderman',
        title:"Spider-Man",
        description:'this is Fourth series'
    }, {
        id:5,
        imageurl:"https://source.unsplash.com/200x200/?robots",
        title:"Robots",
        description:'this is Fifth series'
    }
    ];

function Allseries(){

 const [isLoading,setloading]=useState(true);
 const [isdataLoaded,setdata]=useState([]);
useEffect(()=>{

    fetch('https://series-259a7-default-rtdb.firebaseio.com/series.json')
    .then(data=>{return data.json()})
    .then(res=>{
        const seriesdata =[];
        for(const key in res){
            seriesdata.push({
                id:key,
                ...res[key]
            });
        } 
        setloading(false);
        setdata(seriesdata);
    
    }).catch((err)=>{
        console.log(err)
        setloading(false);
        setdata(sd);
    });
},[]);

if(isLoading){
    return <h1>Loading....</h1>
}if(isdataLoaded.length===0){ 
    return <h1>NO DATA</h1>
}

    return(
           <div>
             <h1>All series</h1>
         <Series data={isdataLoaded}/>
          </div>
    );
}

export default Allseries;