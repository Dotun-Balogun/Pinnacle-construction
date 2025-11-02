import * as   motion  from "motion/react-client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '@/assets/images/footer-logo-construction.png'

const Footer= () => {
  return (
    <footer className="bg-[#1E2A39] text-white py-12 flex flex-col items-center text-center px-4 space-y-8">
      <div className="flex flex-col items-center space-y-2">
        {/* Placeholder logo */}
        <Image
          src={logo}
          alt="Xtra Construction Logo"
          className="w-[270px] h-[81px]"
        />
        
      </div>

      <div className="max-w-lg text-gray-300 leading-relaxed space-y-2">
        <p>
          A company is any entity that engages in business, commercial, or
          industrial activities.
        </p>
        <p>
          Companies can be structured in different ways. For example, your
          company can be a sole proprietorship, a partnership, or a corporation.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <SocialIcon
          icon={<FaFacebookF />}
          hoverColor="#1877F2"
          label="Facebook"
        />
        <SocialIcon icon={<FaTwitter />} hoverColor="#1DA1F2" label="Twitter" />
        <SocialIcon
          icon={<FaInstagram />}
          hoverColor="#E4405F"
          label="Instagram"
        />
        <SocialIcon icon={<FaYoutube />} hoverColor="#FF0000" label="YouTube" />
      </div>
      <div className='w-full h-[40px] bg-gray-300'>
        <h1> copyright@ Olamidotun {new Date().getFullYear()}</h1>
      </div>
    </footer>
  );
};

export default Footer;

interface SocialIconProps {
  icon: React.ReactNode;
  hoverColor: string;
  label: string;
}

const SocialIcon= ({ icon, hoverColor, label }:SocialIconProps) => {
  return (
    <motion.div
      whileHover={{
        rotate: 360,
        backgroundColor: hoverColor,
        color: "#fff",
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
      className="w-12 h-12 flex items-center justify-center rounded-sm bg-yellow-500 text-gray-900 cursor-pointer shadow-md"
      title={label}
    >
      <span className="text-xl">{icon}</span>
    </motion.div>
  );
};
