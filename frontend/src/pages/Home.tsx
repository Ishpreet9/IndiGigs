import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CgProfile } from "react-icons/cg";
import ServiceCard from '../components/ServiceCard';
import { assets } from '../assets/assets';
import { WiDaySunny } from 'react-icons/wi';
import { LuMoonStar } from "react-icons/lu";
import { AppContext } from '../context/AppContext';
import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";



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
      image: assets.chris,
    }
  ]

  type recentGigsType = {
    title: string,
    rating: number,
    ratingNumber: number,
    startingPrice: number,
    image: string,
  }

  const recentGigs: recentGigsType[] = [
    {
      title: "I will create UI/UX designs in figma.",
      rating: 5,
      ratingNumber: 108,
      startingPrice: 5000,
      image: assets.gig_image_1
    },
    {
      title: "I will build, design or redesign shopify website.",
      rating: 4,
      ratingNumber: 301,
      startingPrice: 7000,
      image: assets.gig_image_2
    },
    {
      title: "I will do professional video editing for your videos.",
      rating: 5,
      ratingNumber: 718,
      startingPrice: 11500,
      image: assets.gig_image_3
    },
    {
      title: "I will do podcast audio editing, mixing and mastering.",
      rating: 5,
      ratingNumber: 523,
      startingPrice: 3500,
      image: assets.gig_image_4
    },
    {
      title: "I will do technical analysis on any crypto or stock.",
      rating: 5,
      ratingNumber: 432,
      startingPrice: 9300,
      image: assets.gig_image_5
    },
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
        <img src={assets.india_map} className='fixed w-[65vw] pointer-events-none -rotate-[20deg] invert opacity-[3%] contrast-10' alt="" />
        <div className='relative flex flex-col justify-center items-center w-[80%] h-[80%] overflow-hidden rounded-[1vw] border-[0.15vw] border-neutral-500'>
          <img src={assets.gig_image_3} className='absolute w-full contrast-125 opacity-25 brightness-50' alt="" />

          <div className='relative flex flex-col justify-evenly items-center w-full h-full bg-black/20'>
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
                <input type="text" className='flex-1 text-[1.3vw] text-white bg-black/40 outline-none px-[1.6vw] py-[0.6vw] ' placeholder='Search For Any Service ' />
                <IoSearch className='text-[2.5vw] text-neutral-200 border-[0.12vw] border-blue-400 hover:border-neutral-200 hover:text-white cursor-pointer rounded-[2vw] bg-blue-400 p-[0.4vw] transition-all duration-300' />
              </div>
              <div className='flex justify-center items-center gap-[1vw] text-[1vw] text-neutral-100 leading-none'>
                <span className='text-neutral-400'>Popular: </span>
                <span className='px-[1vw] border-[0.11vw] border-neutral-600 hover:border-neutral-400 rounded-full py-[0.7vw] bg-black/40 cursor-pointer transition-color duration-300'>Web Development</span>
                <span className='px-[1vw] border-[0.11vw] border-neutral-600 hover:border-neutral-400 rounded-full py-[0.7vw] bg-black/40 cursor-pointer transition-color duration-300'>Ui/Ux Design</span>
                <span className='px-[1vw] border-[0.11vw] border-neutral-600 hover:border-neutral-400 rounded-full py-[0.7vw] bg-black/40 cursor-pointer transition-color duration-300'>Content Writing</span>
                <span className='px-[1vw] border-[0.11vw] border-neutral-600 hover:border-neutral-400 rounded-full py-[0.7vw] bg-black/40 cursor-pointer transition-color duration-300'>AI Services</span>
              </div>
            </div>
            <button className='text-white text-[1.2vw] font-semibold px-[1vw] py-[0.5vw] bg-gradient-to-r from-blue-500 to-blue-400 rounded-[0.7vw]'>
              Kickstart Your Career Now
            </button>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className='flex relative justify-center items-center w-full h-[90vh] px-[2vw]'>
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

      {/* section 3 */}
      <div className='flex flex-col justify-between text-white items-start px-[6vw] py-[1vw] gap-[1.5vw] w-full h-[50vh]'>
        <h1 className='text-[2.3vw]'>Recently Viewed & More:</h1>
        <div className='flex w-full flex-1 gap-[4vw] overflow-x-scroll custom-scroll'>
          {
            recentGigs.map((item, index) => (
              <div key={index} className='flex flex-col justify-between items-start h-full w-[15vw] rounded-[1vw] overflow-hidden bg-neutral-400/20 border-[0.18vw] border-neutral-400/60 hover:border-neutral-300 cursor-pointer transition-color duration-300'>
                <img src={item.image} alt="" className='w-full' />
                <div className='flex flex-col justify-evenly items-start px-[1vw] py-[0.5vw] flex-1 w-full'>
                  <h1 className='text-[1vw]'>{item.title}</h1>
                  <span className='flex text-[1vw] gap-[0.3vw] justify-center items-center'>
                    <FaStar />
                    <span>{item.rating}</span>
                    <span>({item.ratingNumber})</span>
                  </span>
                  <span className='text-[1.1vw] font-semibold'>From ₹{item.startingPrice}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* footer */}
      <footer className="w-full h-[50vw] md:h-[30vw] lg:h-[20vw] bg-black mt-[5vw] text-gray-300 flex flex-col p-8 sm:p-12 md:p-16">

        {/* Main content area that grows to fill the vertical space */}
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: Branding and Contact Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">Your Brand</h2>
            <p className="text-gray-400 mb-4 max-w-xs">
              Creative solutions and beautiful code from a passionate freelance developer.
            </p>
            <div>
              <p className="text-sm"><strong>Email:</strong> contact@yourbrand.com</p>
              <p className="text-sm"><strong>Location:</strong> Remote</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Connect</h3>
            <div className="flex space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </div>
          </div>
        </div>

        {/* Bottom bar for copyright notice */}
        <div className="text-center text-gray-500 border-t border-slate-800 pt-[1vw] mt-8">
          <p>&copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.</p>
        </div>

      </footer>
    </div>
  )
}

export default Home
