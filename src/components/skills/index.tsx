import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from "swiper";
import htmlImage from "../../../public/images/html.png";
import cssImage from "../../../public/images/css.png";
import javascriptImage from "../../../public/images/javascript.png";
import reactImage from "../../../public/images/react.png";
import nodeImage from "../../../public/images/node.png";
import mongoImage from "../../../public/images/mongodb.png";
import gitImage from "../../../public/images/git.png";
import Image from 'next/image';

SwiperCore.use([Autoplay]);

export const Skills = () => {
  return(
    <section className="md:my-32 max-md:my-16" id='skills'>
      <h1 className="mb-10 text-2xl text-slate-200 text-center">Skills</h1>
      <div className='md:ml-14 px-8 z-0'>
        <Swiper className='flex text-center items-center justify-center'
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            368: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            520: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30
            },
          }}
        
        >
        
          <SwiperSlide className=' flex justify-center items-center h-40'>
            <Image className='w-40 ' src={htmlImage} alt="html" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center h-40'>
            <Image className='w-40 ' src={cssImage} alt="css" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center h-40'>
            <Image className='w-40  p-2' src={javascriptImage} alt="javascript" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center h-40' >
            <Image className='w-40 p-2' src={reactImage} alt="react" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center h-40' >
            <Image className='w-40 p-2' src={nodeImage} alt="node" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center h-40' >
            <Image className='w-40 ' src={mongoImage} alt="mongoDB" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center h-40'>
            <Image className='w-40 ' src={gitImage} alt="git" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}