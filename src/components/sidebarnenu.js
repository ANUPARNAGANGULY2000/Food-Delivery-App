import { Badge } from '@mui/material';
import React, { useState } from 'react';
import {FaHome,FaInfoCircle,FaUtensils ,FaFileImage,FaArrowAltCircleRight,FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink ,useNavigate } from 'react-router-dom';

const Sidebar = ( {children} ) => {

  const navigate = useNavigate();

const [isOpen , setIsOpen] = useState(false);
const toggle = ()=> setIsOpen(!isOpen);
const getdata = useSelector((state) => state.componentreducer.carts);
//console.log(getdata);
const go_to_cart= ()=>{
  navigate('/myCart');
}
const menuItem =[
{
    path:"/",
    name: "Home",
    icon: <FaHome/>
},

{

    path:"/about",
    name: "About Us",
    icon: <FaInfoCircle />
},

{

    path:"/menu",
    name: "Menu",
    icon: <FaUtensils />
},

{
    path:"/gallery",
    name: "Gallery",
    icon: <FaFileImage/>
},

{

    path:"/reservation",
    name: "Reservation",
    icon: <FaArrowAltCircleRight/>
}
]


return (
    <>
    <div className="top-nav">
        <img className='logo' src="https://s.tmimgcdn.com/scr/800x500/212900/spoon-and-fork-restaurant-logo_212966-original.png" width="140px" height="90px" alt=''></img>
        <h1>FoOdIeS</h1>
        <Badge badgeContent={getdata.length}  color="primary" className='add_to_cart' >
        <i class="fas fa-shopping-cart text-light" style={{fontSize:35, cursor:"pointer" , color:"orange"}}onClick={go_to_cart}></i>
        </Badge>
    </div>

    <div className="container_new"> 

      <div className="sidebar" style={{width: isOpen? "230px" : "60px"}}>
        <div className="top-section">
            <h1 style={{display: isOpen? "block" : "none"}}>WELCOME</h1>
            <h4 style={{display: isOpen? "block" : "none"}}>TO OUR</h4>
            <h3 style={{display: isOpen? "block" : "none"}}>CAFE & RESTAURANT</h3>
            <div style={{marginLeft: isOpen ? "50px" : "0px", padding: isOpen ? "25px" : "10px"}} className="bars">
                <FaBars className="bar"onClick={toggle}/>
            </div>
        </div>
        <div className="below-section">
        <section className='routes'>
        {
        
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="Link" activeClassName="active">
                    <div className="icon">{item.icon}</div>
                    <div className="iconname"style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                 </NavLink>
            ))
        }
        </section>
        </div>
      </div>
    <main>{children}</main>
</div>
</>
  );
      
      }
export default Sidebar;
