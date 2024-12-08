import React from 'react'

export default function UnitForm({setShowForm,setNewUnit,newUnit,
addUnit}) {
  return (
   <div className="p-0 w sm:p-12 fixed z-[99999] flex top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-full h-full  justify-center items-center" >
 <div onClick={()=>setShowForm(false)} className="w-full h-full bg-black/40 absolute z-1"></div>

  <div className="mx-auto max-w-md px-16 rounded-xl  z-20 py-12 bg-white shadow-2xl border-2 border-black sm:rounded-3xl min-w-[300px] h-[70%]">
    
    <h1 className="text-2xl font-bold">Unit details</h1>
    <form onSubmit={addUnit} id="form" >
      <div className="relative z-0 w-full mb-5">
        <input onChange={(e)=>setNewUnit({...newUnit, name:e.target.value})} type="text" name="name" placeholder=" " required className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
        <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">name</label>
        <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>
      <div className="relative z-0 w-full mb-5">
        <input required onChange={(e)=>setNewUnit({...newUnit, location:e.target.value})} type="location" name="location" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
        <label htmlFor="location" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">location</label>
      </div>
      <div className="relative z-0 w-full mb-5">
        <select required onChange={(e)=>setNewUnit({...newUnit, status:e.target.value})} name="select"  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200">
          <option value selected disabled hidden />
          <option value={"Approved"}>Approved</option>
          <option value={"Rejected"}>Rejected</option>
          <option value={"Pending"}>Pending</option>
        </select>
        <label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Status</label>
      </div>
     
      <div className="relative z-0 w-full mb-5">
        <input required onChange={(e)=>setNewUnit({...newUnit, price:e.target.value})} type="number" name="money" placeholder=" " className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
        <label htmlFor="money" className="absolute duration-300 top-3 left-0 -z-1 origin-0 text-gray-500">price</label>
      </div>
      
      <button id="button" type="submit" className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-700 hover:bg-blue-800 cursor-pointer hover:shadow-lg focus:outline-none">
        Add Unit
      </button>
    </form>
  </div>
</div>
  )
}
