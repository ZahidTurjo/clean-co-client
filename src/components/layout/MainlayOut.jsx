/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const MainlayOut = ({children}) => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogut=()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error.message);
    })
  }
  const navlinks= <>
     <NavLink to='/' className='btn '>Home</NavLink>
     <NavLink to='/about' className='btn '>About</NavLink>
        <NavLink to='/services' className='btn '>services</NavLink>
        {
          user? <NavLink onClick={handleLogut} to='/' className='btn '>logout</NavLink>
          :
          <NavLink to='/login' className='btn '>login</NavLink>
        }
  </>
    return (
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
       <div className="flex gap-2">
      {navlinks}
        {/* <NavLink to=''>About</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/about'>About</NavLink> */}
       </div>
      </div>
    </div>
    {/* Page content here */}
    {
        children
    }
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <div className="flex flex-col gap-2">
    {navlinks}
        {/* <NavLink to=''>About</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/about'>About</NavLink> */}
       </div>
  </div>
</div>
    );
};

export default MainlayOut;