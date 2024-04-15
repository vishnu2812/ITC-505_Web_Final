import React, { useState } from 'react';
import axios from "axios";
import heart from '../assets/logo.png';

const Donate = () => {
  const [showForm, setShowForm] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonateClick = () => {
    setShowForm(true);
  };

  const handleChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      // User is not logged in, redirect to login page
      window.location.href = '/Login'; // Assuming '/Login' is the route for the login page
      return;
    }
    try {
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");
      
      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount: donationAmount
      });

      const options = {
        key,
        amount: 3000,
        currency: "INR",
        name: "Study Stride Foundation ",
        description: "Donation for Edcuation",
        image: "../assets/logo.png",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "",
          email: "littleheart@gmail.com",
          contact: "9573556556"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#121212"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error here, e.g., display an error message to the user
    }
  };

  return (
    <div className="charity-donate-page">
      <div className="donate">
        <div className="donate_container">
          <h1>Let's Make a Change Together!</h1>
          <p>The greatest use of a life is to spend it on something that will outlast it.</p>
          <p className="second">Any help or donation,<br />no matter how big or small,<br /> will be whole-heartedly and deeply appreciated.</p>
          {!showForm && (
            <button className='buttondonate' onClick={handleDonateClick}>DONATE NOW</button>
          )}
          {showForm && (
            <form onSubmit={handleSubmit} className='amountform'>
              <input
                type="number"
                value={donationAmount}
                onChange={handleChange}
                placeholder="Enter donation amount"
                required
              />
              <button type="submit">Proceed to Payment</button>
            </form>
          )}
        </div>
      </div>
      
<footer>
       
       <div className="doc">
         <h3>Navigation</h3>
         <a href="/">Home</a>
         <a href="/donate">Donate</a>
         <a href="/contact">Contact</a>
       </div>
       <div className="contact">
         <h3>Contact Us</h3>
         <a href="contact" target="_blank" rel="noopener noreferrer">United States</a>
         <a href="tel: +910000000000">200-000-0000</a>
         <a href="mailto: ppppppp@gmail.com">Little@gmail.com</a>
       </div>
       <div className="social">
         <h3>Support</h3>
         <p>Help us shape a better future for children all over the world</p>
         <div className="side_btn">
           <a href="/donate">JOIN US TODAY</a>
         </div>
       </div>
         </footer>
    </div>
  );
};

export default Donate;













