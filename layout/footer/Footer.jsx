import Link from "next/link";
import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="p-2 dark:bg-black bg-[#ecf8f9] font-sans text-lg text-center">
        <Link href="www.linkedin.com/in/hideki-yanagawa-b825a965">@ Hideki Yanagawa {new Date().getFullYear()}</Link>
      </div>
    </Fragment>
  );
};

export default Footer;
