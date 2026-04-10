import { motion } from "motion/react";
import imgAbout from "../../assets/me.png";

/**
 * AnimatedFlowerPhoto
 * Drop-in replacement for the profile photo block in the About section.
 * Wildflowers bloom in around the photo on scroll-into-view, then gently sway.
 *
 * Responsive behavior:
 * - Mobile (< md): 4 corner flowers, scaled down, tighter cluster
 * - Desktop (md+): all 8 flowers, full cluster
 *
 * Usage: replace the existing <motion.div> wrapping <img src={imgAbout} /> with <AnimatedFlowerPhoto />
 */

// Flower color palette — tuned to your site's #70b110 green
const C = {
  green: "#70b110",
  greenDark: "#4a7a08",
  greenLeaf: "#6aa03a",
  greenDeep: "#2f5a1a",
  coral: "#e87a63",
  coralSoft: "#f5a68e",
  purple: "#7d6fd1",
  purpleSoft: "#a89ce0",
  yellow: "#f2c14e",
  cream: "#f8e6c8",
};

// Bloom-in variants (scroll-triggered, staggered via delay)
const bloomVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.3 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 1.1,
      ease: [0.2, 0.9, 0.3, 1.1],
    },
  }),
};

type FlowerProps = {
  i: number;
  className: string;
  rotate: number;
  swayDuration?: number;
  /** Hide this flower on mobile to thin out the cluster on small screens. */
  hideOnMobile?: boolean;
  children: React.ReactNode;
};

function Flower({
  i,
  className,
  rotate,
  swayDuration = 5,
  hideOnMobile = false,
  children,
}: FlowerProps) {
  return (
    <motion.div
      custom={i}
      variants={bloomVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      style={{ rotate }}
      className={`absolute pointer-events-none ${
        hideOnMobile ? "hidden md:block" : ""
      } ${className}`}
    >
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{
          duration: swayDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "bottom center" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Reusable pulse for petals
const petalPulse = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export default function AnimatedFlowerPhoto() {
  return (
    <div
      className="
        relative shrink-0 mx-auto
        w-[280px] h-[280px]
        sm:w-[340px] sm:h-[340px]
        md:w-[380px] md:h-[380px]
        lg:w-[420px] lg:h-[420px]
      "
    >
      {/* ============ FLOWER 1: Purple bellflowers (top-left) — KEEP on mobile ============ */}
      <Flower
        i={0}
        className="top-[-10px] left-[-20px] md:left-[-30px] scale-[0.7] sm:scale-[0.85] md:scale-100"
        rotate={-8}
      >
        <svg width="110" height="140" viewBox="0 0 110 140" style={{ overflow: "visible" }}>
          <path d="M55 140 Q52 90 50 50" stroke={C.greenDark} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <ellipse cx="35" cy="95" rx="18" ry="9" fill={C.greenLeaf} transform="rotate(-30 35 95)" />
          <ellipse cx="72" cy="80" rx="16" ry="8" fill={C.green} transform="rotate(25 72 80)" />
          <motion.g {...petalPulse} style={{ transformOrigin: "center" }}>
            <circle cx="30" cy="38" r="9" fill={C.purple} />
            <circle cx="30" cy="38" r="4" fill={C.purpleSoft} />
            <circle cx="52" cy="25" r="10" fill={C.purple} />
            <circle cx="52" cy="25" r="4.5" fill={C.purpleSoft} />
            <circle cx="75" cy="38" r="9" fill={C.purple} />
            <circle cx="75" cy="38" r="4" fill={C.purpleSoft} />
          </motion.g>
        </svg>
      </Flower>

      {/* ============ FLOWER 2: Coral tulip (top) — desktop only ============ */}
      <Flower
        i={1}
        className="top-[-40px] left-[130px]"
        rotate={4}
        swayDuration={7}
        hideOnMobile
      >
        <svg width="90" height="130" viewBox="0 0 90 130" style={{ overflow: "visible" }}>
          <path d="M45 130 L45 55" stroke={C.greenDark} strokeWidth="4" fill="none" strokeLinecap="round" />
          <ellipse cx="20" cy="85" rx="22" ry="11" fill={C.green} transform="rotate(-20 20 85)" />
          <ellipse cx="68" cy="95" rx="20" ry="10" fill={C.greenLeaf} transform="rotate(25 68 95)" />
          <motion.g {...petalPulse} style={{ transformOrigin: "center" }}>
            <path d="M45 55 Q20 50 25 20 Q45 5 45 35 Q45 5 65 20 Q70 50 45 55 Z" fill={C.coral} />
            <path d="M45 55 Q38 45 40 25 Q45 15 45 40 Q45 15 50 25 Q52 45 45 55 Z" fill={C.coralSoft} />
          </motion.g>
        </svg>
      </Flower>

      {/* ============ FLOWER 3: Yellow wheat-style (top-right) — KEEP on mobile ============ */}
      <Flower
        i={2}
        className="top-[-20px] right-[-15px] md:right-[-20px] scale-[0.7] sm:scale-[0.85] md:scale-100"
        rotate={10}
        swayDuration={4}
      >
        <svg width="80" height="140" viewBox="0 0 80 140" style={{ overflow: "visible" }}>
          <path d="M40 140 L40 40" stroke={C.greenDark} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <ellipse cx="15" cy="90" rx="18" ry="9" fill={C.greenLeaf} transform="rotate(-35 15 90)" />
          <ellipse cx="62" cy="100" rx="16" ry="8" fill={C.green} transform="rotate(30 62 100)" />
          <motion.g {...petalPulse} style={{ transformOrigin: "center" }}>
            <ellipse cx="40" cy="30" rx="12" ry="22" fill={C.yellow} />
            <path d="M40 10 Q32 20 40 30 Q48 20 40 10" fill={C.coral} />
          </motion.g>
        </svg>
      </Flower>

      {/* ============ FLOWER 4: Yellow berry trio (right) — desktop only ============ */}
      <Flower
        i={3}
        className="top-[140px] right-[-70px]"
        rotate={14}
        hideOnMobile
      >
        <svg width="100" height="130" viewBox="0 0 100 130" style={{ overflow: "visible" }}>
          <path
            d="M50 130 L50 60 M50 60 L25 30 M50 60 L50 25 M50 60 L75 30"
            stroke={C.greenDark}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="20" cy="90" rx="18" ry="9" fill={C.green} transform="rotate(-25 20 90)" />
          <ellipse cx="80" cy="95" rx="18" ry="9" fill={C.greenLeaf} transform="rotate(25 80 95)" />
          <motion.g {...petalPulse} style={{ transformOrigin: "center" }}>
            <circle cx="25" cy="28" r="10" fill={C.yellow} />
            <circle cx="25" cy="28" r="4" fill={C.coral} />
            <circle cx="50" cy="22" r="11" fill={C.yellow} />
            <circle cx="50" cy="22" r="4" fill={C.coral} />
            <circle cx="75" cy="28" r="10" fill={C.yellow} />
            <circle cx="75" cy="28" r="4" fill={C.coral} />
          </motion.g>
        </svg>
      </Flower>

      {/* ============ FLOWER 5: Coral daisy (bottom-right) — KEEP on mobile ============ */}
      <Flower
        i={4}
        className="bottom-[0px] right-[0px] md:bottom-[0px] md:right-[-15px] scale-[0.7] sm:scale-[0.85] md:scale-100 rotate-[10deg] md:rotate-[12deg]"
        rotate={0}
        swayDuration={7}
>
        <svg width="100" height="130" viewBox="0 0 100 130" style={{ overflow: "visible" }}>
          <path d="M50 130 L50 55" stroke={C.greenDark} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <ellipse cx="22" cy="95" rx="20" ry="10" fill={C.greenLeaf} transform="rotate(-30 22 95)" />
          <ellipse cx="78" cy="90" rx="18" ry="9" fill={C.green} transform="rotate(28 78 90)" />
          <motion.g {...petalPulse} style={{ transformOrigin: "center" }}>
            <ellipse cx="50" cy="25" rx="12" ry="18" fill={C.coralSoft} />
            <ellipse cx="30" cy="40" rx="12" ry="18" fill={C.coralSoft} transform="rotate(-55 30 40)" />
            <ellipse cx="70" cy="40" rx="12" ry="18" fill={C.coralSoft} transform="rotate(55 70 40)" />
            <ellipse cx="50" cy="55" rx="12" ry="14" fill={C.coralSoft} />
            <circle cx="50" cy="38" r="8" fill={C.coral} />
            <circle cx="50" cy="38" r="4" fill={C.yellow} />
          </motion.g>
        </svg>
      </Flower>

      {/* ============ FLOWER 6: Purple bloom (bottom center) — desktop only ============ */}
      <Flower
        i={5}
        className="bottom-[-20px] left-[140px]"
        rotate={2}
        hideOnMobile
      >
        <svg width="80" height="120" viewBox="0 0 80 120" style={{ overflow: "visible" }}>
          <path d="M40 120 L40 30" stroke={C.greenDark} strokeWidth="3" fill="none" strokeLinecap="round" />
          <ellipse cx="15" cy="80" rx="16" ry="8" fill={C.green} transform="rotate(-30 15 80)" />
          <ellipse cx="65" cy="70" rx="16" ry="8" fill={C.greenLeaf} transform="rotate(30 65 70)" />
          <ellipse cx="20" cy="55" rx="14" ry="7" fill={C.greenLeaf} transform="rotate(-25 20 55)" />
          <motion.g {...petalPulse} style={{ transformOrigin: "center" }}>
            <circle cx="40" cy="25" r="12" fill={C.purple} />
            <circle cx="40" cy="25" r="6" fill={C.purpleSoft} />
            <circle cx="40" cy="25" r="2.5" fill={C.yellow} />
          </motion.g>
        </svg>
      </Flower>

      {/* ============ FLOWER 7: Upright coral tulips (bottom-left) — KEEP on mobile ============ */}
       <Flower
        i={6}
        className="bottom-[-12px] left-[5px] md:bottom-[-12px] md:left-[5px] scale-[0.7] sm:scale-[0.85] md:scale-100 rotate-[-20deg] md:rotate-[-20deg]"
        rotate={0}
        swayDuration={4}
      >
          <svg width="90" height="140" viewBox="0 0 90 140" style={{ overflow: "visible" }}>
            {/* Main stem */}
            <path d="M45 140 L45 45" stroke={C.greenDark} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* Side stems branching up to side flowers */}
            <path d="M45 70 Q30 55 25 35" stroke={C.greenDark} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M45 70 Q60 55 65 35" stroke={C.greenDark} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Leaves */}
            <ellipse cx="20" cy="95" rx="18" ry="9" fill={C.greenLeaf} transform="rotate(-35 20 95)" />
            <ellipse cx="70" cy="100" rx="18" ry="9" fill={C.green} transform="rotate(35 70 100)" />
            <ellipse cx="25" cy="115" rx="14" ry="7" fill={C.green} transform="rotate(-25 25 115)" />
            <motion.g {...petalPulse} style={{ transformOrigin: "center" }}>
              {/* Center flower — tallest, upright tulip shape */}
              <path
                d="M45 45 Q36 40 38 22 Q45 12 45 28 Q45 12 52 22 Q54 40 45 45 Z"
                fill={C.coral}
              />
              <path d="M45 45 Q42 35 43 25 Q45 18 45 32 Q45 18 47 25 Q48 35 45 45 Z" fill={C.coralSoft} />
              {/* Left flower — slightly smaller, upright */}
              <path
                d="M25 35 Q18 32 20 18 Q25 10 25 22 Q25 10 30 18 Q32 32 25 35 Z"
                fill={C.coral}
              />
              <path d="M25 35 Q23 28 24 20 Q25 15 25 25 Q25 15 26 20 Q27 28 25 35 Z" fill={C.coralSoft} />
              {/* Right flower — slightly smaller, upright */}
              <path
                d="M65 35 Q58 32 60 18 Q65 10 65 22 Q65 10 70 18 Q72 32 65 35 Z"
                fill={C.coral}
              />
              <path d="M65 35 Q63 28 64 20 Q65 15 65 25 Q65 15 66 20 Q67 28 65 35 Z" fill={C.coralSoft} />
            </motion.g>
          </svg>
        </Flower>

      {/* ============ FLOWER 8: Cream poppy (left) — desktop only ============ */}
      <Flower
        i={7}
        className="top-[150px] left-[-70px]"
        rotate={-14}
        swayDuration={7}
        hideOnMobile
      >
        <svg width="100" height="130" viewBox="0 0 100 130" style={{ overflow: "visible" }}>
          <path d="M50 130 L50 55" stroke={C.greenDark} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <ellipse cx="20" cy="90" rx="20" ry="10" fill={C.green} transform="rotate(-30 20 90)" />
          <ellipse cx="78" cy="85" rx="18" ry="9" fill={C.greenLeaf} transform="rotate(30 78 85)" />
          <motion.g {...petalPulse} style={{ transformOrigin: "center" }}>
            <ellipse cx="35" cy="35" rx="14" ry="18" fill={C.cream} transform="rotate(-25 35 35)" />
            <ellipse cx="65" cy="35" rx="14" ry="18" fill={C.cream} transform="rotate(25 65 35)" />
            <ellipse cx="50" cy="25" rx="14" ry="18" fill={C.cream} />
            <ellipse cx="50" cy="45" rx="12" ry="10" fill={C.coral} />
            <circle cx="50" cy="42" r="4" fill={C.greenDeep} />
          </motion.g>
        </svg>
      </Flower>

      {/* ============ PROFILE PHOTO ============ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.04, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute inset-[30px] md:inset-[40px] z-10"
      >
        <img
          src={imgAbout}
          alt="Jessie with cat"
          className="w-full h-full rounded-full object-cover shadow-[0_20px_60px_-20px_rgba(47,90,26,0.35)]"
        />
      </motion.div>
    </div>
  );
}
