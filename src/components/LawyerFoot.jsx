import React from "react";
import { assets } from "../assets/assets";
import docpro from '../assets/docpro.png'

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm">
        {/* -----Left Section----- */}
        <div>
          <img className="mb-5 w-40" src={docpro} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* -----Center Section----- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* -----Right Section----- */}
        <div>
          <p className="text-xl font-medium mb-5">Contact </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 6565454616</li>
            <li>infoonclick@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* -----Copyright Section----- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ DocPro - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
