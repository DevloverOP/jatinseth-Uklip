import NavBar from './NavBar';
import Footer from './Footer';
import './Layout.css';
function Layout(props){


const {showLinks,name,logout} = props;
return(
    <div className='mainContainer'>
        <header>
           <NavBar showLink={showLinks} user={name} signout={logout}/>   
        </header>   
        <main>{props.children}</main>
        <Footer/>

    </div>
)

}
export default Layout;