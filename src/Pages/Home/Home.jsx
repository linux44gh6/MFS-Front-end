import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="navbar bg-primary fixed w-full z-50 px-10 top-0 left-1 border-b">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">MFS</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  </div>
  <div className="navbar-end">
  <div className="avatar online">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
  </div>
</div>
   <div className=' flex justify-between'>
   <div className=' bg-primary h-[90vh] w-[300px] fixed left-1 mt-8'>
      
      <div className=' p-2'>
      <span className=' text-left text-white font-semibold text-2xl'><h1>My Accout</h1></span>
      <span className=' text-left text-white font-semibold text-2xl'><h1>My Accout</h1></span>
      <span className=' text-left text-white font-semibold text-2xl'><h1>My Accout</h1></span>
      <span className=' text-left text-white font-semibold text-2xl'><h1>My Accout</h1></span>
      <span className=' text-left text-white font-semibold text-2xl'><h1>My Accout</h1></span>
      </div>
     </div>
     <div className='  bg-orange-100 sticky ml-[272px] mt-4 h-[100vh]  p-4 w-full'>
    <h1>layout 2</h1>
     </div>
   </div>
    </div>
  )
}
