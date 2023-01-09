import React from 'react';

function Reservation () {
  return (
    
    <div className='reservation'>
      <div className='form_1'>
        <div className='table_book'>
          <span><h4>Need a table ?</h4></span>
          <span><h2>BOOK YOUR TABLE</h2></span>
          
        </div>
      <form>
     
    <div className='form'>
      <div><input type="text" name="name" id="name_1" placeholder='Enter your name'/></div>
      <div><input type="email" name="email" id="email_1"placeholder='Email address' /></div>
    
      <div><input type="date" name="date" id="date"/></div>
      <div><input type="time" name='time' id="time"/></div>
 
      <div> <input type="number" name="number" id="number" placeholder='Number of guest' /></div>
      <div><input type= "text" name="message" id="message_1" placeholder='Enter a message..........' /></div>
    
      <input type="submit" value="Submit" id="submit_2" />
      </div>
</form>
      </div>

      
      <div >
        <img src="https://www.pngkey.com/png/full/4-49191_food-png-transparent-free-images-fast-food-clipart.png" className='reserve_img'  alt="" />
      </div>
      
    </div>
  
  );
};

export default Reservation;
