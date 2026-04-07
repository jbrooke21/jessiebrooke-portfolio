import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-6">
      <div className="mx-auto px-8 md:px-12 lg:px-22">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 md:gap-6 text-center md:text-left">
          
          {/* Icons */}
          <div className="order-1 md:order-2 flex items-center justify-center gap-2">
            
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
              <div className="w-[82px] h-[82px] md:w-[110px] md:h-[110px] flex items-center justify-center">
                <svg
                  className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] translate-y-[2px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M395.9 255.2C401 292.5 391.2 334.2 360 355.9C337.7 371.4 307.2 370 289.2 361.6C252.1 344.3 239.7 303 242.4 264.4C246.7 203.5 283.3 176.5 317.7 176.9C364.6 176.7 389.5 208.7 395.9 255.2zM544 152L544 488C544 518.9 518.9 544 488 544L152 544C121.1 544 96 518.9 96 488L96 152C96 121.1 121.1 96 152 96L488 96C518.9 96 544 121.1 544 152zM426 377.2C426 377.2 425.9 343.2 425.9 159.9L396.9 159.9L396.9 200.2C396.1 200.5 395.7 199.7 395.3 199C385.7 178.3 359.4 152.7 319.3 153C267.4 153.4 232.1 184.2 218.7 230.8C214.4 245.7 212.9 260.9 213.2 276.4C214.9 354.3 258.3 394.2 325.6 391.6C354.5 390.5 380.1 374.6 394.6 346.4C395.1 345.4 395.7 344.5 396.3 343.5C396.5 343.6 396.7 343.6 396.9 343.7C397.2 347.5 397.1 374.4 397 378.2C396.8 393 395 407.7 389.8 421.7C382 442.7 367.5 456.4 345.3 461.2C327.5 465.1 309.7 465 292.1 460C270.6 453.9 255.6 441 251 418.2C250.7 416.6 249.7 416.9 248.7 416.9L221.9 416.9C222.7 427.5 225.1 437.2 230.4 446.1C254.6 486.6 313.1 494.6 358.6 483.5C408.5 471.2 425.9 428.6 426 377.2z"
                  />
                </svg>
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
              <div className="w-[82px] h-[82px] md:w-[110px] md:h-[110px] flex items-center justify-center">
                <svg
                  className="w-[46px] h-[46px] md:w-[60px] md:h-[60px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM135.4 416H69.3V202.1h66.1V416zM102.3 173c-21.2 0-38.3-17.1-38.3-38.3S81.1 96.4 102.3 96.4s38.3 17.1 38.3 38.3-17.1 38.3-38.3 38.3zM416 416h-66.1V302.4c0-27.1-.5-61.9-37.7-61.9-37.7 0-43.5 29.5-43.5 59.9V416h-66.1V202.1h63.5v29.2h.9c8.8-16.7 30.4-34.3 62.6-34.3 66.9 0 79.2 44 79.2 101.3V416z"
                  />
                </svg>
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