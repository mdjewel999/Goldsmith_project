import { Link } from "react-router-dom";
import './NavBar.css'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const NavBar = () => {


    
    const { user , logOut} = useContext(AuthContext);
    console.log(user);
    
    const handleLogOut =() =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error);
        })
    }

    const navItems = 
    <>
        <li
        ><Link to="/">Home</Link> </li>
        <li><Link to='/animaltoys'>All jewelry</Link> </li>

        <li>
        <div className="dropdown dropdown-hover">
       <label tabIndex={0} className="btn m-1">All Category</label>
       <ul tabIndex={0} className="dropdown-content  p-4 mt-96 sm:mr-96  bg-base-100 rounded-box w-48">
        <li><Link>sports car</Link></li>
        <li><Link>Regular car</Link></li>
        <li><Link to="/animaltoys">Goldsimth</Link></li>
        <li><Link>Mini fire truck</Link></li>
        <li><Link>Mini police car</Link></li>
      </ul>
      </div>
      </li>
      
        <li>
            {user && 
            <Link  to="/adtoy">My Jewelry</Link>
            }
        </li>
        
        <li>
        {user && 
        <Link to="/book"> Add jewelry</Link>
        }
        </li>  

        <li> <Link to="/qustion">Blogs</Link> </li>
        <li className="login_logout">
            
         {user ? (
            <button type="submit"  onClick={handleLogOut} className="btn">LogOut</button>
              ) : (
                <Link to="/login">
                    <button type="submit" className="btn">Login</button>
                </Link>
              )}

               {user && (
                <img className="person" src={user?.photoURL} alt="" />
              )}
        </li>
      
    </>
    return (
        <div className="navbar bg-base-100 h-28">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="">
                <div className="avatar">
                   <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                     <img src="https://i.ibb.co/7SYmYHG/logo.png" />
                   </div>
                 </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn  btn-primary text-white">Goldsmith</button>
            </div>
        </div>
    );
};

export default NavBar;