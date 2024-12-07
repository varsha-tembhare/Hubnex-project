import "./location.css"
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";



const Location =()=>{
    return(
      <div className="second-page">


        <div className="left">
            <div className="locations-container">
                <span>
          <h2>Our Locations</h2>
               </span>
  
  <div className="country-card">
 
  <div className="location-card">
    <img src="hubnex-project/public/india flag.jpg" alt=""></img>
    <h3>India</h3>
    </div>
  
  <div className="location-card">
    <img src="hubnex-project/public/uae flag.png" alt=""></img>
    <h3>UAE</h3>
 </div>

  <div className="location-card">
    <img src="hubnex-project/public/usa flag.png" alt=""></img>
    <h3>USA</h3>
 </div>

   <div className="location-card">
    <img src="hubnex-project/public/indonesia flag..jpg" alt=""></img>
    <h3>INDONESIA</h3>
    </div>

    </div>
    
    <div className="lower-txt">

    <div className="city-list">
      <p className="city-txt" >Gurgaon</p>
      <p  className="city-txt">Bangalore</p>
      <p  className="city-txt">Pune</p>
      <p  className="city-txt">Lucknow</p>
    </div>
    
    <div className="contact-info">
      
      <p className="para-txt"><IoLocationOutline />  Etihad Airways Centre, Al Rahah, Al <br /> Muneera, Abu Dhabi, UAE</p>
      <p className="para-txt"> <CiMail />hello@hubnex.in</p>
      <p className="para-txt"><MdOutlineCall />+91 1234567890</p>
    <button className="contact-button">Contact Us<FaArrowRightLong /></button>
    </div>

  </div>
  </div>
</div>

<div>
  <img src="hubnex-project/src/components/location/location.css"  alt=""  />
</div>




</div>
    )
}
export default Location;