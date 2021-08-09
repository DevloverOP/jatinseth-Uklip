import NavBar from './NavBar';

function Layout(props){


const {showLinks,name,logout} = props;
return(
    <div>
        <header>
           <NavBar showLink={showLinks} user={name} signout={logout}/>
           
        </header>   
        <main>{props.children}</main>
    </div>
)

}
export default Layout;