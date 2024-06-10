"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill } from "react-icons/bs";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className=' shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='about'
        ref={aboutRef}
      >
        <h2 className='text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3'>
          <FaUserCheck /> About me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          {/* Person Image */}
          <Image
            alt='about image'
            className={
              "shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain"
            }
            height={350}
            ref={profile2Ref}
            src='/images/personal.jpg'
            width={280}
          />
          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className='text-3xl text-center md:text-left font-semibold text-[#6d32a5] dark:text-[#07d0e5]'>
              Hideki Yanagawa
            </p>
            {/* Profil Name */}
            <p className='text-center md:text-left text-red-600 mt-1'>
              Full stack developer in .net core, react, and nextjs
            </p>
            {/* Location */}
            <div className='flex flex-wrap justify-center md:justify-normal gap-5'>
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#6d32a5] dark:text-[#07d0e5]'>
                    Location
                  </p>
                </div>
                <p className='text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]'>
                  Kuala Lumpur, Malaysia{" "}
                </p>
              </div>
              {/* Age */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#6d32a5] dark:text-[#07d0e5]'>
                    Age
                  </p>
                </div>
                <p className='text-center md:text-left text-[#6d32a5] dark:text-[#07d0e5]'>
                  30 Years Young{" "}
                </p>
              </div>
              {/* Experience */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#6d32a5] dark:text-[#07d0e5]'>
                    Experience
                  </p>
                </div>
                <p className='text-center md:text-left text-[#6d32a5] dark:text-[#07d0e5]'>
                  5 Years{" "}
                </p>
              </div>
              {/* Project */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#6d32a5] dark:text-[#07d0e5]'>
                    Projects
                  </p>
                </div>
                <p className='text-center md:text-left text-[#6d32a5] dark:text-[#07d0e5]'>
                  3{" "}
                </p>
              </div>
            </div>

            <div className='mt-5 justify-evenly text-justify'>
              <p className='text-gray-600 dark:text-gray-300'>
                HI!! I am Hideki Yanagawa, a passionate and experienced developer with a solid background in computer science and information technology. I hold a Diploma in Information Technology and a Degree in Computer Science from Taylors University. Over the years, I have honed my skills in various programming languages and frameworks, specializing in .NET Core, Node.js, and JavaScript, among others.
                Currently, I am a developer at Gussmann Technologies, where I lead a team of six in developing a cutting-edge transport management system using event-driven architecture, Next.js, and React. My role involves creating live data streams for GPS tracking APIs, enhancing existing systems, and ensuring seamless testing and bug fixes. My journey in software development started with internships at Fusionex, where I contributed to diverse projects, including social media platforms and agricultural industry solutions.
                Before diving into the tech world, I gained hands-on experience as an Automotive Mechanic at Arian Motors Zimbabwe, working on servicing Japanese vehicles and handling tire alignment and balancing. This diverse background has given me a unique perspective on problem-solving and a keen eye for detail.
                In addition to my technical expertise, I have completed several online courses, including Oracle Certified Professional, MySQL Database Admin, Database Administrator (DBA), and Zed Certified PHP Engineer. I also attended a summer course in Upper-Intermediate English at the British Council to enhance my communication skills.
                I am always eager to learn and stay updated with the latest industry trends. My passion for technology drives me to continually improve and take on new challenges. Let's connect and explore how I can contribute to your next project or team!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
