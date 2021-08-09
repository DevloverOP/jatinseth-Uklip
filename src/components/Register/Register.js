import { useRef } from "react";
import { useHistory } from "react-router-dom";
import FormStyle from "../UI/FormStyle";

function Register() {
  const uname = useRef();
  const id = useRef();
  const pwd = useRef();
  const history = useHistory();

  function onSubmit(e) {
   e.preventDefault();
    let userData = {};
    if (
      uname.current.value !== "" &&
      id.current.value !== "" &&
      pwd.current.value !== ""
    ) {
      userData = {
        name: uname.current.value,
        id: id.current.value,
        pwd: pwd.current.value,
      };

      fetch(`https://series-259a7-default-rtdb.firebaseio.com/userdb.json`, {
        method: "POST",
        body: JSON.stringify(userData),
        header: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            alert("Account Successfully Created.please Login.");
            history.replace("/login");
          } else {
            alert(`${res.statusText}. Please try again!!`);
            history.replace("/register");
          }
        })
        .catch((err) => {
          alert(`${err}. Please try again!!`);
          history.replace("/register");
        });
    } else alert("Details incomplete ");

    uname.current.value = "";
    id.current.value = "";
    pwd.current.value = "";
  }

  return (
    <FormStyle>
      <h1>Register</h1>
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder="User Name"
            ref={uname}
            required
          />
        </div>
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
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </FormStyle>
  );
}
export default Register;
