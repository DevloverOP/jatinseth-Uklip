import FormStyle from "../UI/FormStyle";
import {useHistory, Link} from 'react-router-dom';
import { useRef} from 'react';
import DataBase from "../store/userFile";

const DB = new DataBase();

function SignIn(props) {

  const id = useRef();
  const pwd= useRef();
  const history = useHistory();

async function checkUser(e) {
   e.preventDefault();

   let userAvailable=[];
  const data = {
    id: id.current.value,
    pass: pwd.current.value,
  };
     try{
      const req = await fetch(`https://series-259a7-default-rtdb.firebaseio.com/userdb.json/?id=${data.id}`)
    const res = await req.json()    
    if(res){
       userAvailable = (Object.values(res)).filter((user) => {
        return user.id === data.id && user.pwd === data.pass;
        });
       } 
   }catch(error){
    console.log('this is error',error)
      //checking in local database if network err
      userAvailable = await DB.getusers().filter((user) => {
        return user.id === data.id && user.pwd === data.pass;
      });
   }

   if (userAvailable.length !== 0) {
    DB.storeUser(userAvailable)
    props.login(userAvailable, true);
    history.replace("/home");

  }else{
    alert('Invalid details,Please enter correct details')
    id.current.value="";
    pwd.current.value=""; 
  }
  
}

  return (
    <FormStyle>
      <h1>SignIn</h1>
      <form>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            ref={id}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={pwd}
            required
          />
        </div>
        <div>
       <button type="submit"onClick={checkUser}>Submit</button>
        </div>
        <Link to='/register'>New User?</Link>
      </form>
    </FormStyle>
  );
}
export default SignIn;
