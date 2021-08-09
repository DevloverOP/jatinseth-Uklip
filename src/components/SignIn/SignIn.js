import FormStyle from "../UI/FormStyle";
import {useHistory, Link} from 'react-router-dom';
import { useRef} from 'react';
const users=[
  {
     id: "an@gmail.com",
     name: "Ankit Rawat",
     password: "1111"
  },
  {
     id: "pk@gmail.com",
     name: "Prakash Singh",
     password: "1122"
  },
  {
     id: "ak@gmail.com",
     name: "Ankush Soni",
     password: "1105"
  },
  {
     id: "mn@gmail.com",
     name: "Mohit",
     password: "1122"
  },
  {
     id: "jatin.handsomehunk@gmail.com",
     name: "jatin seth",
     password: "1111"
  }
]

function SignIn(props) {

  const id = useRef();
  const pwd= useRef();
  const history = useHistory();


  function local(loguser){
    const userdata=[];
    localStorage.clear();
    if(localStorage.getItem('loggeduser') === null){
        userdata.push(loguser[0]);
        localStorage.setItem('loggeduser',JSON.stringify(userdata))
    }    
    }

function checkUser(e) {
  e.preventDefault();
  const data = {
    id: id.current.value,
    pass: pwd.current.value,
  };
  const userAvailable = users.filter((user) => {
    return user.id === data.id && user.password === data.pass;
  });

  if (userAvailable.length !== 0) {
    local(userAvailable);
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
