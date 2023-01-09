import React from 'react'

function Gallery() {
  return (
    <div className='gallery_container'>
      <div className='gallery_row'>
        <img className='row_image' src='https://spoonuniversity.com/wp-content/uploads/sites/2/2016/06/IMG_3400-670x670.jpg' alt=''></img>
        <img className='row_image' src='https://blog.petpooja.com/wp-content/uploads/2022/01/Foodporn-Instagram-image-mise-en-avant.jpg' alt=''></img>
        <img className='row_image' src='https://i.insider.com/5aa7d9cff375f6e0158b4578?width=1000&format=jpeg&auto=webp' alt=''></img>
        <img className='row_image' src='https://www.food24.com/wp-content/uploads/2015/02/67d79fe551c74403891c17cf268d7bc5.jpg' alt=''></img>
      </div>
      <div className='gallery_column'>
       <img className='column_image' src='https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?cs=srgb&dl=pexels-rene-asmussen-1581384.jpg&fm=jpg' alt=''></img>

      </div>
      <div className='gallery_column'>
 
      <img className='column_image' src='https://t3.ftcdn.net/jpg/03/11/19/38/360_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg' alt=''></img>
      </div>
      <div className='gallery_row'>
        <img className='row_image' src='https://www.shutterstock.com/image-photo/friends-having-pasta-dinner-home-260nw-1206985765.jpg' alt=''></img>
        <img className='row_image' src='https://www.shutterstock.com/image-photo/portrait-smiling-adult-friends-outdoors-260nw-540638545.jpg' alt=''></img>
        <img className='row_image' src='https://d2w1ef2ao9g8r9.cloudfront.net/images/_1600x1167_crop_center-center_82_line/finedining_1-75nb439xd_190614_130109.png' alt=''></img>
        <img className='row_image' src='https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg' alt=''></img>

      </div>
      
    </div>
  );
};

export default Gallery;
