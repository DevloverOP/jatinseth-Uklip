import './Footer.css';
import {Link} from 'react-router-dom'
const Footer  = ()=>{

return (
     <div className="footer">
     <Link to='/home' >Home</Link>
     <Link to='/new-series' >Add Series</Link>
     <Link to='/favourite' >Favourites</Link>
     <Link to='/' >About</Link>
     <Link to='/' >Contact</Link>
      <h3 className='copyright'>Uklip&copy;2021</h3>   
     </div>
);

}

export default Footer;