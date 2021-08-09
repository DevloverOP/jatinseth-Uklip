import {Link} from 'react-router-dom';
import './Starter.css';

function Starter(){

return (
     <div className="start">
         {/* <input type='email'name="email" placeholder='email@example.com' required />    */}
         <Link to='/register' className="bigbtn" >Get Started</Link>
     </div>
);
}

export default Starter;