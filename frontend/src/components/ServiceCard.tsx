import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { FaAnglesRight } from "react-icons/fa6";

const ServiceCard = () => {

  type Service = {
    name: string;
    description: string;
    image: string;
  }

  const [services, setServices] = useState<Service[]>([
    {
      name: "Graphic Design",
      description: "Design logos, posters, branding, and marketing materials with creativity, precision, and attention to detail.",
      image: assets.graphic_design_icon
    },
    {
      name: "Web Development",
      description: "Build responsive, modern websites and web apps using the latest technologies, ensuring fast performance and scalability.",
      image: assets.web_dev_icon
    },
    {
      name: "Video Editing",
      description: "Create engaging videos, animations, and edits with professional effects, transitions, and sound design for any platform.",
      image: assets.video_editing_icon
    },
    {
      name: "More",
      description: "Explore additional services, from marketing to consulting, offered by talented professionals on the platform.",
      image: assets.more_icon
    }
  ]);

  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);
  const [rightArrowHover, setRightArrowHover] = useState<boolean>(false);
  const [fade, setFade] = useState(false);

  const handleSelectedServiceIndexChange = (type: string) => {
    setFade(true); // start fade out
    setTimeout(() => {
      if (type === 'increment') {
        setSelectedServiceIndex(selectedServiceIndex === services.length - 1 ? 0 : selectedServiceIndex + 1);
      } else {
        setSelectedServiceIndex(selectedServiceIndex === 0 ? services.length - 1 : selectedServiceIndex - 1);
      }
      setFade(false); // fade in new content
    }, 200); // duration matches CSS transition
  }

  return (
    <div className='relative flex flex-col justify-center gap-[1.5vw] items-center w-[55%] h-[76%]'>

      {/* Right Arrow */}
      <div onClick={() => handleSelectedServiceIndexChange('increment')} className='absolute -right-[7vw] pl-[2vw] pr-[1vw] py-[1vw]'>
        <div onMouseEnter={() => setRightArrowHover(true)} onMouseLeave={() => setRightArrowHover(false)}
          className='absolute bg-gradient-to-r dark:from-neutral-900 from-neutral-200 dark:via-neutral-400 via-blue-400 dark:to-neutral-100 to-blue-400 opacity-0 hover:opacity-100 w-full h-full top-0 left-0 rounded-tr-[0.8vw] rounded-br-[0.8vw] border-t-[0.12vw] border-r-[0.12vw] border-b-[0.12vw] border-black cursor-pointer transition-all duration-300'>
        </div>
        <FaAnglesRight className={`relative z-20 text-[2vw] pointer-events-none ${rightArrowHover ? 'dark:text-black text-white' : 'dark:text-neutral-300 text-neutral-500'}`} />
      </div>

      {/* Left Arrow */}
      <div onClick={() => handleSelectedServiceIndexChange('decrement')} className='absolute -left-[7vw] pl-[1vw] pr-[2vw] py-[1vw]'>
        <div onMouseEnter={() => setRightArrowHover(true)} onMouseLeave={() => setRightArrowHover(false)}
          className='absolute bg-gradient-to-r dark:from-neutral-100 from-blue-400 dark:via-neutral-400 via-blue-400 dark:to-neutral-900 to-neutral-200 opacity-0 hover:opacity-100 w-full h-full top-0 left-0 rounded-tl-[0.8vw] rounded-bl-[0.8vw] border-t-[0.12vw] border-l-[0.12vw] border-b-[0.12vw] border-black cursor-pointer transition-all duration-300'>
        </div>
        <FaAnglesRight className={`relative z-20 text-[2vw] rotate-[180deg] pointer-events-none ${rightArrowHover ? 'dark:text-black text-white' : 'dark:text-neutral-300 text-neutral-500'}`} />
      </div>

      {/* Service Image & Dots */}
      <div className='flex flex-col justify-evenly py-[1vw] items-center w-full h-[50%] bg-blue-400 rounded-[1vw]'>
        <div className={`w-full flex-1 flex justify-center items-center transition-opacity duration-200 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <img src={services[selectedServiceIndex].image} alt="" className='w-[10vw] h-[10vw] grayscale contrast-150' />
        </div>
        <div className='flex justify-center items-center gap-[1vw] w-full'>
          {services.map((service, index) => (
            <div key={index} className={`w-[0.7vw] h-[0.7vw] border-[0.15vw] ${selectedServiceIndex === index ? 'bg-blue-300 border-blue-700' : 'bg-neutral-500 border-neutral-800'} rounded-full transition-all duration-300`}></div>
          ))}
        </div>
      </div>

      {/* Service Text Content */}
      <div className={`relative flex flex-col justify-start items-center w-full flex-1 transition-opacity duration-200`}>

        {/* Decorative corners */}
        <div className='absolute top-0 left-0 w-[3.5vw] h-[3.5vw] rounded-tl-[1vw] border-t-[0.15vw] border-l-[0.15vw] dark:border-neutral-200 border-neutral-700'></div>
        <div className='absolute top-0 right-0 w-[3.5vw] rotate-[90deg] h-[3.5vw] rounded-tl-[1vw] border-t-[0.15vw] border-l-[0.15vw] dark:border-neutral-200 border-neutral-700'></div>
        <div className='absolute bottom-0 left-0 w-[3.5vw] h-[3.5vw] rotate-[270deg] rounded-tl-[1vw] border-t-[0.15vw] border-l-[0.15vw] dark:border-neutral-200 border-neutral-700'></div>
        <div className='absolute bottom-0 right-0 w-[3.5vw] h-[3.5vw] rotate-[180deg] rounded-tl-[1vw] border-t-[0.15vw] border-l-[0.15vw] dark:border-neutral-200 border-neutral-700'></div>
        <div className={`w-full h-full flex flex-col justify-start items-center gap-[1vw] px-[3vw] py-[1.6vw] ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className='text-[1.3vw] dark:text-white text-black'>{services[selectedServiceIndex].name}</h1>
          <span className='text-[1.1vw] flex-1 flex justify-center items-center dark:text-neutral-100 text-neutral-900'>
            {services[selectedServiceIndex].description}
          </span>
        </div>
      </div>

    </div>
  )
}

export default ServiceCard;
