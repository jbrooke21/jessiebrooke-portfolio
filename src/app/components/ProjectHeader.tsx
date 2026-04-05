import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useEffect, useState } from "react";
import avatarSvg from "../../assets/jessie-avatar.svg";
import Container from "./container";

type ProjectHeaderProps = {
  homePath?: string;
};

export default function ProjectHeader({
  homePath = "/",
}: ProjectHeaderProps) {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [startFloating, setStartFloating] = useState(false);

  useLayoutEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      setIsScrolled(currentScrollY > 100);

      if (currentScrollY < 40) {
        setIsHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (scrollDelta < 8) {
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 140) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStartFloating(true);
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        y: isHeaderVisible ? 0 : -120,
        opacity: isHeaderVisible ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-[156px] flex items-center justify-center transition-colors duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <button
          onClick={() => navigate(homePath)}
          className="group cursor-pointer"
          aria-label="Back to portfolio"
        >
          <motion.div
            initial={false}
            animate={
              startFloating
                ? { y: [0, -4, 0] }
                : { y: 0 }
            }
            transition={
              startFloating
                ? {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.2,
                    times: [0, 0.5, 1],
                  }
                : undefined
            }
            className="relative size-[120px] flex items-center justify-center will-change-transform"
          >
            <img
              src={avatarSvg}
              alt="Back to portfolio"
              className="w-[80px] h-[80px] object-contain"
            />
          </motion.div>
        </button>
      </Container>
    </motion.header>
  );
}