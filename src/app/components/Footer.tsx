import { motion } from "motion/react";
import GoodreadsIcon from "../../assets/goodreads.svg?react";
import LinkedInIcon from "../../assets/linkedin.svg?react";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-6">
      <div className="mx-auto px-8 md:px-12 lg:px-22">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 md:gap-6 text-center md:text-left">
          
          {/* Icons */}
<div className="order-1 md:order-2 flex items-center justify-center gap-1">

  {/* Goodreads */}
          <motion.a
            href="https://www.goodreads.com/user/show/39348963-jessie-brooke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#70b110] transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Goodreads"
          >
            <div className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] flex items-center justify-center">
              <GoodreadsIcon className="w-[54px] h-[54px] md:w-[66px] md:h-[66px] fill-current" />
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/jessbrooke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#70b110] transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.96 }}
            aria-label="LinkedIn"
          >
            <div className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] flex items-center justify-center">
              <LinkedInIcon className="w-[54px] h-[54px] md:w-[66px] md:h-[66px] fill-current" />
            </div>
          </motion.a>

</div>

          {/* Email */}
          <motion.a
            href="mailto:jessbrooke21@gmail.com"
            className="order-2 md:order-1 font-['Poppins'] font-medium italic text-[18px] sm:text-[22px] md:text-[28px] hover:text-[#70b110] transition-colors break-words text-center md:text-left"
            whileHover={{ scale: 1.02 }}
          >
            jessbrooke21@gmail.com
          </motion.a>
        </div>
      </div>
    </footer>
  );
}