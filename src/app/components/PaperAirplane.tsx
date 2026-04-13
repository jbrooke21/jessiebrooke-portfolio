import { motion } from "motion/react";

/**
 * PaperAirplane
 * Decorative sketch of a paper airplane with a looping dashed trail.
 * The trail draws itself in along its path, then the plane fades in
 * at the end and bobs gently forever.
 */
export default function PaperAirplane() {
  const trailPath =
    "M1.65347 68.2093 C23.4132 82.9617 49.836 88.5374 76.1899 88.1074 C92.8605 88.149 111.442 80.7669 118.993 64.0032 C123.407 54.7841 124.145 43.9707 115.162 38.0544 C107.262 32.5464 95.1145 37.728 93.2887 47.1621 C91.7632 88.9564 172.243 63.0985 193.634 54.005";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="inline-block shrink-0 -mt-2"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 269 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible w-[110px] md:w-[180px] h-auto"
    >
        <defs>
          <mask id="trail-mask">
            <motion.path
              d={trailPath}
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              pathLength={1}
              strokeDasharray="1 1"
              initial={{ strokeDashoffset: 1 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
          </mask>
        </defs>

        {/* Dashed trail — revealed along path by the mask */}
        <g mask="url(#trail-mask)">
          <path
            d={trailPath}
            stroke="#231F20"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeDasharray="7 7"
            fill="none"
          />
        </g>

        {/* Paper airplane — fades in once trail finishes, then bobs */}
        <motion.g
          initial={{ opacity: 0, x: -8, y: 4 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.1, ease: "easeOut" }}
        >
          <motion.g
            animate={{ y: [0, -3, 0], rotate: [0, 1.5, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.6,
            }}
            style={
              {
                transformOrigin: "230px 30px",
                transformBox: "fill-box",
              } as React.CSSProperties
            }
          >
            <path
              d="M267.643 1L241.038 51.1502L208.848 38.7944L267.643 1Z"
              stroke="#231F20"
              strokeWidth="2"
              strokeLinejoin="round"
              fill="white"
            />
            <path
              d="M205.219 53.8361L208.848 38.7942L217.874 42.2703L205.219 53.8361Z"
              stroke="#231F20"
              strokeWidth="2"
              strokeLinejoin="round"
              fill="white"
            />
            <path
              d="M167 38.7944L267.643 1L197.013 36.8667L167 38.7944Z"
              stroke="#231F20"
              strokeWidth="2"
              strokeLinejoin="round"
              fill="white"
            />
            <path
              d="M205.217 53.8362L197.012 36.8667"
              stroke="#231F20"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}