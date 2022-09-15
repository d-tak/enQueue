import React from 'react';

export default function BusinessProfile(props) {
  return (
    <>
      <div className="row">
        <div className="column-full">
          <div className="graphic">
            <div className="rname">
              <h1 className="h1-title">WaitingFuze</h1>
            </div>
          </div>
        </div>
      </div>
      <h2>Join the Waitlist</h2>

      <form >
        <div>
          <label>Enter Location</label>
        </div>
          <input type="text" className="" placeholder='City, State' />

        <div>
          <label>Enter E-Mail Address</label>
        </div>
            <input type="text" className="" placeholder='abc123@gmail.com' />

        <div>
          <label>Enter Hours of Operation</label>
        </div>
            <input type="text" className='' placeholder='' />

        <h3>Your Information</h3>
        <label>
          <p> First Name</p>
          <input type="text" className='' placeholder='' />
        </label>
        <label>
          <p> Last Name</p>
          <input type="text" className='' placeholder='' />
        </label>
        <div>
          <label>
            <p> Create Password</p>
            <input type="password" className='' placeholder='' />
          </label>
        </div>
        <div className="center">
          <button className='confirm'>Confirm</button>
        </div>

      </form>
    </>
  );
}
