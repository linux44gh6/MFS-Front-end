import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Register() {
  return (
    <div className='h-[100vh] '>
        <div className=' bg-primary h-[100vh] flex justify-between '>
       <div className=' w-[500px] p-4'>
        <h1 className=' text-5xl text-left font-extrabold text-white'>MFS</h1>
        <h1 className=' text-left font-bold text-white text-2xl mt-20'>Check the Status</h1>
        <p className=' text-left text-white'>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        <div className=' flex gap-3 items-center justify-center mt-5'>
          <span className=' text-4xl border rounded-full p-1 bg-white text-blue-500'><FaFacebook></FaFacebook></span>
          <span className=' text-4xl border rounded-full p-1 bg-white '><FaInstagram></FaInstagram></span>
          <span className=' text-4xl border rounded-full p-1 bg-white text-blue-500 '><FaLinkedinIn></FaLinkedinIn></span>
        </div>
       </div>
       <div className="he bg-[#00000036]  w-1/2 ">
  <div className="hero-content">
  
    <div className="card  shrink-0 shadow-2xl">
      <form className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <h1>Already Have an account Here?please <span className='text-white underline'>Login</span></h1>
    </div>
  </div>
</div>
        </div>

    </div>
  )
}
