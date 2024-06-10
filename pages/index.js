import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"))
const Apps = dynamic(() => import("@/sections/Apps"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Hideki Yanagawa - Developer Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Hideki Yanagawa - Experienced Developer specializing in .NET Core, Node.js, and JavaScript."/>
        <meta name="keywords" content="Hideki Yanagawa, Developer, .NET Core, Node.js, JavaScript, Computer Science, Information Technology, Gussmann Technologies, Fusionex"/>
        <meta name="author" content="Hideki Yanagawa"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="Hideki Yanagawa - Developer Portfolio"/>
        <meta property="og:description" content="Experienced Developer specializing in .NET Core, Node.js, and JavaScript."/>
        <meta property="og:image" content="/images/personal.jpg"/>
        <meta property="og:url" content="YOUR_PORTFOLIO_URL"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Hideki Yanagawa - Developer Portfolio"/>
        <meta name="twitter:description" content="Experienced Developer specializing in .NET Core, Node.js, and JavaScript."/>
        <meta name="twitter:image" content="/images/personal.jpg"/>

        {/* <!-- Favicon --> */}
        {/* <link href="https://hideki-yanagawa-portfolio.vercel.app/favicon.ico" rel="icon" type="image/x-icon" /> */}

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          {/* <SocialMedia /> */}

          {/* LatestBlog */}
          {/* <LatestBlogs /> */}
          {/* Apps */}
          {/* <Apps /> */}
          {/* Send Mail */}
          {/* <SendMail /> */}
          {/* Footer */}
          <Footer />
          <div className="z-40">
            {/* tawk.to Chat System */}
            {/* <ChatSystem /> */}
          </div>
          {/* Feedback Modal */}
          <Feedback />
        </div>
      </div>
    </Fragment>
  );
}

export default Home
