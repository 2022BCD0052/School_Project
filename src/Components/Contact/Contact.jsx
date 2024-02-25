import React from 'react'
import './Contacy.css'
import msg_icon from '../../assets/msg-icon.png'

import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc8a0ede-4a65-40b3-84d7-419f01b88ef8");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send a message <img src={msg_icon} alt="" /></h3>
        <p>
          Best in Academics, most experienced team of faculties
          100% Result, Toppers in almost every exam
          Innovative Curriculum, 360° development programs
          Best Hostel Facility
          Bus Facility with GPS tracking
        </p>
        <ul>
          <li> <img src={mail_icon} alt="" />sarswatis.s.school@gmail.com</li>
          <li> <img src={phone_icon} alt="" />787-738-1100</li>
          <li> <img src={location_icon} alt="" />Balwantpura Chelasi road Near Dundlod, Phatak, Balwantpura, Nawalgarh, Rajasthan <br />333042,INDIA</li>

        </ul>


      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" required />
          <label>Write your message here</label>
          <textarea placeholder="Write your message here" rows="6" required></textarea>
          <button type="submit" className='btn dark-btn'>Send Message <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>

      </div>
    </div>
  )
}
