import React from 'react'
import { NavLink } from 'react-router-dom';
import {FaFacebook,FaTwitterSquare,FaTelegramPlane,FaWhatsappSquare} from "react-icons/fa";

function Home(){
  return (
    <div className='home'>
      <div className='home-body'>
        <div className='home-text'>
            <h1>Eat and Enjoy the true test</h1>
            <p>Aliqua elit voluptate elit mollit reprehenderit commodo ullamco suntsit dolor aliquip velit ea excepteur. Minim nostrud nostrud commodo 
            in deserunt do nulla ea aliqua reprehenderit et. Magna consectetur officia in ea duis sunt. Minim anim officia veniam ad Lorem fugiat aute consequat sunt. Nulla laborum proident magna aliquip ad officia duis non aute in enim sunt.  </p>
              <div className='home-button'>
                <button><NavLink to='/menu' className='navlink'>ORDER NOW</NavLink></button>
                <button><NavLink to='/reservation'className='navlink'>Book A Table</NavLink></button>
             </div>
        </div>
        </div>
              <div className='home-taco'>
               <img className='taco-img' src='tacoimage2.png' alt=''></img>

        </div>
        <div className='explore'> 
            <h1> We believe good food over great smile </h1>
            <p> Lorem Sit nisi consequat consequat tempor reprehenderit ea excepteur non. Laborum ipsum mollit culpa elit non sunt excepteur occaecat. Nostrud non minim culpa excepteur aliquip non ad dolor ullamco magna incididunt fugiat tempor voluptate. Aute veniam sit duis eu minim pariatur adipisicing quis aliqua excepteur dolore fugiat exercitation labore. Labore do veniam nostrud sunt consequat nulla veniam excepteur aute ipsum eiusmod.</p>
            <img src='tacoimage.png' alt=''className='taco-img-1'></img>
            <div className='contact_upper'>
                <div><input type="text" name="name" id="name" placeholder='Enter your name'/></div>
                <div><input type="email" name="email" id="email"placeholder='Enter a valid email address.. ' /></div> 
                <div><input type= "text" name="message" id="message" placeholder='Please write your problem here' /></div>
                 <input type="submit" value="Submit" id='submit_2' />
           </div>
           
           <div className='contact_lower'>
              <h2>Get in Touch</h2>
              <h3>Hey! please contact with us<br/> and share your valuable feedback</h3>
                  <i><FaFacebook/></i>
                  <i>< FaTwitterSquare/></i>
                  <i>< FaTelegramPlane/></i>
                  <i>< FaWhatsappSquare/></i>
                  </div>
             <div className='contact_note'><br/>
                  <h2>CALL US</h2>
                  <ul>
                       1(234)567-891 <br/>
                       1(234)891-567
                  </ul>
                     <br/>
                      <h2>LOCATION</h2><br/>
                       <h3>121,Rock Street,<br/>21,Avenue,Kolkata</h3>
             </div>
            
             
      </div>
  </div>

  );
};

export default Home ;

