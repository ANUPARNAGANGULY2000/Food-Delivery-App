import React,{useState} from 'react'
import menulist from './list';
import Button from 'react-bootstrap/Button';
import { ADD } from '../redux/action/action';
import { useDispatch } from 'react-redux';

function Menu (){

      const [data,setData] = useState(menulist);
      console.log(menulist);
      const dispatch=useDispatch();

      const send=(e)=>{
       dispatch(ADD(e));
      }

  return (
    <div className='menu'>
      <div className='food-card'><h1>♥ Our Menu Pack ♥</h1></div>
    <div className="menucard">

      {
        data.map((element,id)=>{
          return(
             <div>
            
            <div className='card'  >
              <img  className='card-image' variant="top" src={element.rimage} height="190px" width="200px" alt='' />
              <div className='card-body'>
              <span className='card-title'><h2>{element.rname}</h2></span>
              <span className='cardtext'>
              <div><span>Price: </span><span style={{ color:"goldenrod"}}>₹ {element.price}</span></div>
              <div><span>Rating: </span><span style={{background:"orangered", color:"whitesmoke"}}>{element.ratings}★</span></div>
              <div><span> Quantity: </span>{element.quantity}</div>
              </span>
              <Button variant="primary" className='card-to-card'onClick={()=>send(element)} >Add To Cart</Button>
             </div>
            </div>
            </div>

          )

          })
      }
    </div>
    </div>
  );
};

export default Menu;
