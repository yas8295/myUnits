import React from 'react'

export default function Button({name}) {
  return (
<button className="relative inline-flex items-center justify-center px-14 py-2.5 text-lg overflow-hidden tracking-tighter text-white bg-[#0512f5] rounded-md group hover:border-[#0512f5] border-2 border-[#0512f5] cursor-pointer w-full">
  <span className="absolute left-1/2 translate-y-1/2 top-1/2 translate-x-1/2 w-full h-full transition-all duration-500 ease-out bg-white rounded-full group-hover:scale-[5]" />
  <span className="absolute bottom-0 left-0 h-full -ml-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-full opacity-100 object-stretch" viewBox="0 0 487 487">
      <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
    </svg>
  </span>
  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="object-cover w-full h-full" viewBox="0 0 487 487">
      <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
    </svg>
  </span>
  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
  <span className="relative text-[14px] font-semibold group-hover:text-black">{name}</span>
</button>  )
}
