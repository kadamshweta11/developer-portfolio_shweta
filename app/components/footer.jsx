// @flow strict
import Link from 'next/link';
// import { CgGitFork } from "react-icons/cg";
// import { IoStar } from "react-icons/io5";
import { personalData } from '@/utils/data/personal-data';
import { BiLogoLinkedin,BiLogoYoutube, BiLogoInstagram,BiLogoMedium } from "react-icons/bi";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-5 lg:gap-9">
                       <p className="text-sm md:text-xl flex items-center gap-3">
                         <MdAlternateEmail
                           className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                           size={36}
                         />
                         <span>{personalData.email}</span>
                       </p>
                       
                       <p className="text-sm md:text-xl flex items-center gap-3">
                         <CiLocationOn
                           className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                           size={36}
                         />
                         <span>
                           {personalData.address}
                         </span>
                       </p>
                     </div>
          <p className="text-sm">
            © Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/shweta-kadam-726875193/" className="text-[#16f2b3]">Shweta Kadam</Link>
          </p>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
           
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            {/* Add YouTube link */}
<Link target="_blank" href={personalData.youtube}>
  <BiLogoYoutube
    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
    size={48}
  />
</Link>
{/* Add Instagram link */}
<Link target="_blank" href={personalData.instagram}>
  <BiLogoInstagram
    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
    size={48}
  />
</Link>
<Link target="_blank" href={personalData.medium}>
  <BiLogoMedium
    className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
    size={48}
  />
</Link>

            {/* <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link> */}
            {/* <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link> */}
            {/* <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link> */}
          </div>
          {/* <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/said7388/developer-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/said7388/developer-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div >
  );
};

export default Footer;