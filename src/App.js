import { Route, Switch } from "react-router-dom";
import Allseries from "./pages/Allseries";
import Newseries from "./pages/Newseries";
import Favourite from "./pages/Favourite";
import Layout from "./components/layout/Layout";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/SignIn";
import Starter from "./components/Starter/Starter";
import {useState, useEffect } from "react";



function App() {
  
  const [isSignedIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState();
 
  

  function login(user,isVarified) {
    if (user.length !== 0) {
    setSignIn(isVarified);

      const name = `${user[0].name}`.substr(0, `${user[0].name}`.indexOf(" "));
      setUserName(name);
    }
  }

  if (isSignedIn) {
    return (
      <div>
        <Layout
          showLinks={isSignedIn}
          name={userName}
          logout={(out) => {
            setSignIn(out);
          }}
        >
          <Switch>
            <Route path="/home" exact>
              <Allseries />
            </Route>
            <Route path="/new-series">
              <Newseries />
            </Route>
            <Route path="/favourite">
              <Favourite />
            </Route>
          </Switch>
        </Layout>
      </div>
    );
  } else {
    return (
      <div  >
        <Layout showLinks={isSignedIn}>
          <Switch>
            <Route path="/" exact>
              <Starter />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <SignIn login={login} />
            </Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
