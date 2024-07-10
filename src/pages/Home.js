import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <div>
        <h1  className='hed1'>CONTACT US </h1>
        <div className='div1'>
          <h5>Name</h5>
          <input type='Name'></input>
          <h5>Email</h5>
          <input  type='Email'></input>
          <h5>Phone No</h5>
          <input type='Phone'></input>
          <h5>Message</h5>
          <textarea typeof='Message'></textarea><br></br>
          <button type="submit" className="button">Submit</button>

        </div>
      </div>
    </div>
    
  );
};

export default Home;