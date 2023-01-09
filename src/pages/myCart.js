import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {minus,plus } from '../redux/action/action';
const MyCart = () => {

    const getdata = useSelector((state) => state.componentreducer.carts);
    var update =0;
    const shippingfee = 60;
    const dispatch = useDispatch();
    
   
    const decrement= (e) =>{
      console.log(e);
      dispatch(minus(e));
    }

    
    
    const increment =(e)=>{
      console.log(e);
      dispatch(plus(e));
    }


  return (

    <div className='mycart'>
      <div className='top_heading'>
      <h1>My Cart</h1></div>

    {
        getdata.map((element,id)=>{

          update += element.price*element.quantity;
        return(
            <div>
              <div className='my_cart' >
              <img  className='my_cart_image' variant="top"src={element.rimage} alt=''/>
              <div className='my_cart_body'>
                    <span className='my_card_title'><h2>{element.rname}</h2></span>
                    <span  className='cardtext_1 '>
                            <div><span>Price: </span>₹ {element.price}</div>
                            <div><span>Rating: </span><span style={{background:"green", color:"whitesmoke"}}>{element.ratings}★</span></div>
                            <div><span> Quantity: </span> <Button className='plus-minus'onClick={()=>decrement(element)}>-</Button>
                      <span className='box'>{element.quantity}</span>
                    <Button className='plus-minus' onClick={()=> increment(element)}>+</Button></div>
                    <div><span> Total: </span>{element.price * element.quantity}</div>
                   </span>
             </div>
            </div>
           
            </div>
        )
        })
    
    }
    <div className="table" style={{color:"black"}}> 
                <h2> PRICE DETAILS</h2>

                <table>
                  <tr>
                    <td>Price ({getdata.length} items)  </td>
                    <td>₹ {update}</td>
                    
                    
                  </tr>
                  
                  <tr>
                  <td>Shipping fee         </td>
                  <td>₹ {shippingfee}</td>
                  </tr>
                                                                                                                  
                  <tr>
                  <td>Grand Total           </td>
                    <td>₹ {update + shippingfee}</td>

                  </tr>
                </table>

                <button className='placeorder'> Place  Order</button>
                </div>
        

</div>
)
}

export default MyCart;
