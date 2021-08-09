import {createContext,useState} from 'react';

export const LoginContext = createContext(
    {logintate:false,
     setlogin:()=>{}
    }
    )

function LoginContextHandler(props){
    const [islogIn, setlogIn] = useState(false);

    
        function setlogstate(islogin){
            setlogIn(islogin)
        }

      const context ={
          logintate:islogIn,
          setlogin:setlogstate
    }
        return (
            <LoginContext.Provider value={context}>
                {props.children}
            </LoginContext.Provider>
        );
    }
    export default LoginContextHandler;