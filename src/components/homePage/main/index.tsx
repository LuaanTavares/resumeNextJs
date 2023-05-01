import React from 'react';
import background from "../../../../public/images/background.jpeg";
import profile from "../../../../public/images/profile.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Image from "next/image";


export const Main = () => {
  return (
    <section id="main">
      <Image
        className="h-screen object-cover fixed -z-10"
        src={background}
        alt="background"
      />

      <section
        className="text-gray-50 bg-cover md:pt-10"
        style={{ background: `url(${background})` }}
      >
        <div className="flex justify-center items-center flex-col p-4 h-screen w-full bg-gradient-to-t from-black to-transparent">
          <Image priority
            src={profile}
            alt="profile-image"
            className="shadow-black shadow-xl p-3 rounded-full  md:w-60"
          />

          <div className="flex flex-col items-center">
            <p className=" my-4 text-4xl">Luan Tavares</p>
            <div className="flex gap-5 justify-center items-center my-6">
              <a className='flex items-center justify-center font-medium bg-cyan-600 rounded-md px-1 w-32 h-8 hover:bg-cyan-800 duration-100' target='_blank' href="https://wa.me/+5521973742623" >
              Hire me </a>
              
              <a className='flex items-center justify-center font-medium bg-cyan-600 rounded-md px-1 w-32 h-8 hover:bg-cyan-800 duration-100' target='_blank' href='https://drive.google.com/file/d/1yT8U_k25y1MuMkiCLjxoy1rJsD1wYu0d/view?usp=share_link'
              download >Download CV</a>
            </div>
          </div>

          <div className=" my-1 p-1 flex justify-center gap-4 rounded-full bg-black">
            <a
              className=" rounded-full"
              target="_blank"
              href="https://www.linkedin.com/in/luantavares0206/"
            >
              <AiFillLinkedin className="text-4xl rounded-full " />
            </a>
            <a
              className=" rounded-full"
              target="_blank"
              href="https://github.com/LuaanTavares"
            >
              <AiFillGithub className="text-4xl rounded-full " />
            </a>
            <a
              className=" rounded-full"
              target="_blank"
              href="https://www.instagram.com/tavaresluan_/"
            >
              <AiOutlineInstagram className="text-4xl rounded-full " />
            </a>
            <a
              className=" rounded-full"
              target="_blank"
              href="https://wa.me/+5521973742623"
            >
              <AiOutlineWhatsApp className="text-4xl rounded-full " />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
