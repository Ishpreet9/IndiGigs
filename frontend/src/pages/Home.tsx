import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CgProfile } from "react-icons/cg";
import ServiceCard from '../components/ServiceCard';
import { assets } from '../assets/assets';
import { WiDaySunny } from 'react-icons/wi';
import { LuMoonStar } from "react-icons/lu";
import { AppContext } from '../context/AppContext';
import { IoSearch } from "react-icons/io5";


const Home = () => {

  const context = useContext(AppContext);
  if (!context) throw new Error("AppContext not found");
  const { darkMode, setDarkMode } = context;

  type freelancerType = {
    name: string,
    work: string,
    image: string
  }

  const freelancers: freelancerType[] = [
    {
      name: "Michael",
      work: "Graphic Designer",
      image: assets.michael,
    },
    {
      name: "Sarah",
      work: "UI/UX Designer",
      image: assets.sarah,
    },
    {
      name: "David",
      work: "Video Editor",
      image: assets.david,
    },
    {
      name: "Chris",
      work: "Content Writer",
      image: assets.david,
    }
  ]

  return (
    <div className='flex flex-col justify-start items-center dark:bg-neutral-900 bg-neutral-200'>

      {/* navbar */}
      <div className='sticky top-0 z-30 dark:bg-neutral-900/70 bg-neutral-300/50 backdrop-blur-[1vw] min-h-[10vh] flex justify-between items-center w-full px-[3.5vw] border-b dark:border-neutral-700 border-neutral-400'>
        <span className='flex justify-center items-center text-[1.7vw] font-semibold text-white font-mono'>
          <h1 className='text-blue-500'>Indi</h1>
          <h1 className='dark:text-white text-black'>Gigs</h1>
        </span>
        <Navbar />
        <span onClick={() => setDarkMode(!darkMode)} className='flex justify-center items-center gap-[0.5vw] py-[0.3vw] border-[0.15vw] px-[0.5vw] border-neutral-500 rounded-full cursor-pointer'>
          <WiDaySunny className='text-[2vw] text-blue-500 dark:opacity-0 opacity-100 transition-opacity duration-300' />
          <LuMoonStar className='text-[1.5vw] text-blue-400 dark:opacity-100 opacity-0 transition-opacity duration-300' />
          <span className='text-[1vw] text-neutral-200'></span>
        </span>
      </div>


      {/* hero section */}

      <div className='flex relative justify-center items-center w-full h-[90vh]'>
        <img src={assets.india_map} className='fixed w-[65vw] -rotate-[20deg] invert opacity-[3%] contrast-10' alt="" />
        <div className='relative flex flex-col justify-evenly items-center w-[80%] h-[80%] bg-black/20 border-[0.15vw] border-neutral-800 rounded-[1vw]'>
          <div className='absolute top-[2.6vw] left-[2.6vw] w-[3.5vw] h-[3.5vw] rounded-tl-[0.8vw] border-t-[0.2vw] border-l-[0.2vw] dark:border-neutral-700 border-neutral-700'></div>
          <div className='absolute top-[2.6vw] right-[2.6vw] w-[3.5vw] rotate-[90deg] h-[3.5vw] rounded-tl-[0.8vw] border-t-[0.2vw] border-l-[0.2vw] dark:border-neutral-700 border-neutral-700'></div>
          <div className='absolute bottom-[2.6vw] left-[2.6vw] w-[3.5vw] h-[3.5vw] rotate-[270deg] rounded-tl-[0.8vw] border-t-[0.2vw] border-l-[0.2vw] dark:border-neutral-700 border-neutral-700'></div>
          <div className='absolute bottom-[2.6vw] right-[2.6vw] w-[3.5vw] h-[3.5vw] rotate-[180deg] rounded-tl-[0.8vw] border-t-[0.2vw] border-l-[0.2vw] dark:border-neutral-700 border-neutral-700'></div>
          <div className='flex flex-col justify-center items-center text-center gap-[0.5vw]'>
            <h1 className='text-[2.3vw] text-neutral-100 font-bold font-'><span>BEST </span><span className='text-blue-400'>INDIAN</span><span> FREELANCERS</span></h1>
            <span className='text-[1.5vw] text-neutral-300'>Freelancers & AI agents all at one place</span>
            <div className='flex justify-center items-center gap-[0.7vw] py-[0.7vw]'>
              <span className='bg-orange-400 w-[1.2vw] h-[1.2vw] rounded-full'></span>
              <span className='bg-white w-[1.2vw] h-[1.2vw] rounded-full'></span>
              <span className='bg-green-500 w-[1.2vw] h-[1.2vw] rounded-full'></span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-[1.5vw]'>
            <div className='w-[45vw] pr-[0.4vw] flex justify-center items-center bg-neutral-900/50 border-[0.15vw] border-neutral-600 focus-within:border-neutral-400 rounded-full transition-color duration-300 overflow-hidden'>
              <input type="text" className='flex-1 text-[1.3vw] text-white bg-transparent outline-none px-[1.6vw] py-[0.6vw] ' placeholder='Search For Any Service ' />
              <IoSearch className='text-[2.5vw] text-neutral-200 border-[0.12vw] border-blue-400 hover:border-neutral-200 hover:text-white cursor-pointer rounded-[2vw] bg-blue-400 p-[0.4vw] transition-all duration-300' />
            </div>
            <div className='flex justify-center items-center gap-[1vw] text-[1vw] text-neutral-100 leading-none'>
              <span className='text-neutral-400'>Popular: </span>
              <span className='px-[1vw] border-[0.11vw] border-neutral-800 hover:border-neutral-600 rounded-full py-[0.7vw] bg-neutral-400/5 transition-color duration-300'>Web Development</span>
              <span className='px-[1vw] border-[0.11vw] border-neutral-800 hover:border-neutral-600 rounded-full py-[0.7vw] bg-neutral-400/5 transition-color duration-300'>Ui/Ux Design</span>
              <span className='px-[1vw] border-[0.11vw] border-neutral-800 hover:border-neutral-600 rounded-full py-[0.7vw] bg-neutral-400/5 transition-color duration-300'>Content Writing</span>
              <span className='px-[1vw] border-[0.11vw] border-neutral-800 hover:border-neutral-600 rounded-full py-[0.7vw] bg-neutral-400/5 transition-color duration-300'>AI Services</span>
            </div>
          </div>
          <button className='text-white text-[1.2vw] font-semibold px-[1vw] py-[0.5vw] bg-gradient-to-r from-blue-500 to-blue-400 rounded-[0.7vw]'>
            Kickstart Your Career Now
          </button>
        </div>
      </div>

      {/* section 2 */}

      <div className='flex relative justify-center items-center w-full h-[90vh]'>
        {/* <img src={assets.india_map} alt="" className='absolute right-[10vw] w-[60vw] dark:opacity-[1.9%] opacity-[4%] contrast-10 dark:invert -rotate-[25deg]' /> */}
        <div className='relative z-20 flex justify-center items-center w-[45%]  h-full'>
          <ServiceCard />
        </div>

        <div className='relative z-20 flex-1 h-full grid grid-rows-2 grid-cols-2 items-center justify-center gap-x-[4vw] px-[3vw] pt-[6.5vw] pb-[5.5vw]'>
          {
            freelancers.map((item, index) => (
              <div key={index} className='flex justify-center items-center bg-black/30 hover:bg-blue-400/30 border-[0.15vw] border-neutral-600 hover:border-blue-400 rounded-[1vw] group transition-all duration-300'>
                <div className='flex flex-col justify-evenly items-center py-[0.25vw] border-r-[0.15vw] border-neutral-600 group-hover:border-white text-white w-[12vw]'>
                  <span className='text-[1.3vw] font-semibold'>{item.name}</span>
                  <span className='text-[1vw]'>{item.work}</span>
                </div>
                <div className='relative w-[12.5vw] h-[6vw]'>
                  <img src={item.image} alt="" className='absolute grayscale contrast-100 group-hover:contrast-125 w-[9vw] group-hover:w-[10vw] bottom-0 group-hover:left-1/2 group-hover:-translate-x-1/2 left-0 transition-all duration-500' />
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* footer */}

    </div>
  )
}

export default Home
