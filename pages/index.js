import Footer from "../components/footer";
import SideMenu from "../components/side-menu";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import Header from "../components/header";
import UnitItem from "../components/unit-item";
import UnitForm from "../components/unit-form";
import UnitsHeader from "../components/units-header";


const MyAccount = () => {
  const [units,setUnits] = useState([
 {
  id:"1",
  image: "/rectangle-20@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Approved",
  added: "31/8/2022",
  button: "Asign a Broker"
 },
 {
  id:"2",
  image: "/rectangle-20-1@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Pending",
  added: "31/8/2022",
  button: ""
 },
 {
  id:"3",
  image: "/rectangle-20-2@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Approved",
  added: "31/8/2022",
  button: "mohamed sami",
  badge: "Reserved"
 },
 {
  id:"4",
  image: "/rectangle-20@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Rejected",
  added: "31/8/2022",
  button: "Edit"
 },
 {
  id:"5",
  image: "/rectangle-20@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Rejected",
  added: "31/8/2022",
  button: "Edit"
 },
 {
  id:"6",
  image: "/rectangle-20@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Rejected",
  added: "31/8/2022",
  button: "Edit"
 },
 {
  id:"7",
  image: "/rectangle-20@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Rejected",
  added: "31/8/2022",
  button: "Edit"
 },
 {
  id:"8",
  image: "/rectangle-20@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Rejected",
  added: "31/8/2022",
  button: "Edit"
 },
 {
  id:"9",
  image: "/rectangle-20@2x.png",
  name: "Grand House Real Estate",
  price: "13.500.000 ",
  location: "New Cairo, Egypt",
  status: "Rejected",
  added: "31/8/2022",
  button: "Edit"
 },
])
const [page,setPage] = useState(1)
const [showForm,setShowForm] = useState(false)
const [newUnit,setNewUnit] = useState({})

const addUnit= (e)=>{
  e.preventDefault()
  setUnits([...units,{...newUnit,id: units.length + 1,image: "/rectangle-20@2x.png",button:"Asign a Broker"}])
  toast.success(`Unit ${newUnit.name} Added Successfully`)
  setNewUnit({})
  setShowForm(false)
}

  return (
    <div className=" bg-[#fff] px-[0px] pb-[0px] box-border gap-[4px] leading-[normal] tracking-[normal] overflow-y-hidden">
      <Header />
      <main className="flex items-start flex-wrap justify-center py-[45px] px-[20px] mq700:px-4 gap-10">
        <SideMenu/>
        <section className="flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px] w-2/3 mq925:w-full font-[Poppins]">
       
      <UnitsHeader onClick={setShowForm} property1="Default" />
 {showForm&&<UnitForm setNewUnit={setNewUnit} setShowForm={setShowForm} newUnit={newUnit} addUnit={addUnit}/>}
       {units?.slice(page == 1 ? 0 : (page-1)*4,page*4)?.map((unit) => (
          <UnitItem units={units} setUnits={setUnits} key={unit.id} unit={unit} />
        ))}
          <div className="flex items-center justify-between w-full flex-wrap gap-6 mq450:justify-center">
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-[0px] pb-[0px] box-border">
          <div className="self-stretch h-[19px] relative capitalize font-medium flex items-center shrink-0 mq450:text-[14px]">
            Showing { page == Math.ceil(units.length / 4) ? units.length : page* 4 } Units of {units?.length} units
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-[20px] text-[#a2a7af] mq700:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[6px] text-[14px] text-[#0512f5]">

          <Image
          onClick={()=>setPage(page == 1 ? 1 : page - 1)}
            className="h-[36px] w-[36px] relative cursor-pointer"
            loading="lazy"
            width={36}
            height={36}
            alt=""
            src="/group-121.svg"
          />
          {Array.from({length: Math.ceil(units.length / 4)},(p,i)=><div className="flex flex-row items-start justify-start py-[6px] px-[15px] relative text-[#f2db00]">
            <Image
            onClick={()=>setPage(i+1)}
              className={`h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full cursor-pointer`}
              loading="lazy"
              width={36}
              height={36}
              alt=""
              src={`${page == i + 1 ? "/group-123.svg" :"/group-123-1.svg"}`}
            />
            <div 
            onClick={()=>setPage(i+1)}
             className={`${page != i + 1 && "text-black"} relative capitalize font-medium z-[1] cursor-pointer`}>{i + 1}</div>
          </div>)}
           <Image
          onClick={()=>setPage(page == Math.ceil(units.length / 4) ? Math.ceil(units.length / 4) : page + 1)}
            className="h-[36px] w-[36px] relative cursor-pointer"
            loading="lazy"
            width={36}
            height={36}
            alt=""
            src="/group-122.svg"
          />
        </div>
          </div>
         
      </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MyAccount;
