import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Lottie from "lottie-react";

import heroAnimation from "../../assets/jessie-avatar.json";
import Footer from "./Footer";
import Container from "./container";
import iconCompass from "../../assets/compass.svg";
import iconStatuspage from "../../assets/statuspage-icon.svg";
import iconHalp from "../../assets/halp-icon.svg";
import iconJsm from "../../assets/jsm-icon.svg";
import iconConfluence from "../../assets/confluence-icon.svg";
import imgAutomation from "../../assets/connie-mainpage.png";
import imgHalp from "../../assets/halp-mainpage.png";
import imgCompass from "../../assets/compass-mainpage.png";
import imgStatuspage from "../../assets/statuspage-mainpage.png";
import imgAbout from "../../assets/me.png";

const siteContent = {
  hero: {
    name: "Jessie",
    headline:
      "A product designer and information architect focused on making complex systems feel simple and human.",
  },
  skills: {
    eyebrow: "What I Bring",
    heading: "Skills & tools",
    groups: [
      {
        title: "Design & UX",
        items: [
          "User-centered thinking",
          "Style guides",
          "Information architecture",
          "Rapid prototyping",
          "Pattern libraries",
          "UX strategy & vision",
        ],
      },
      {
        title: "Tools",
        items: [
          "Figma suite",
          "Framer",
          "Atlassian suite",
          "Microsoft suite",
          "Notion",
          "Adobe suite",
          "Google suite",
          "V0",
          "Lovable",
          "Claude",
          "Replit",
        ],
      },
      {
        title: "Research",
        items: [
          "User research",
          "User testing",
          "Analytical problem solving",
          "Synthesis",
        ],
      },
      {
        title: "Collaboration & process",
        items: [
          "Stakeholder engagement",
          "Cross-functional communication",
          "Documentation",
          "Process design",
          "Continous learning",
          "Empathy",
        ],
      },
    ],
  },
  timeline: [
    { role: "Senior Product Designer", company: "Confluence", period: "2024–2025" },
    { role: "Senior Product Designer", company: "Jira Service Management", period: "2024" },
    { role: "Senior Product Designer", company: "Halp", period: "2024–2022" },
    { role: "Senior Product Designer", company: "Compass", period: "2022–2021" },
    { role: "Product Designer", company: "Statuspage", period: "2021–2019" },
    { role: "Product Designer -> UX Designer", company: "Symphony Communications", period: "2019–2015" },
    { role: "Newbie Freelancer", company: "Web Design", period: "2014–2011" },
  ],
  about: [
    "I'm a Bay Area product designer with over ten years of experience designing thoughtful, human-centered digital products.",
    "I'm especially drawn to complex systems, migration work, and information-rich experiences that need clarity, structure, and care.",
  ],
  contact: {
    email: "jessbrooke21@gmail.com",
  },
};

const navItems = [
  { label: "experience", id: "experience" },
  { label: "work", id: "work" },
  { label: "about", id: "about" },
];

const projects = [
  {
    id: "automation",
    company: "Atlassian Confluence - Automation",
    image: imgAutomation,
    link: "/confluence-automation",
    iconSrc: iconConfluence,
  },
  {
    id: "halp-migration",
    company: "Atlassian Halp to Jira Service Management",
    image: imgHalp,
    link: "/halp-migration",
    iconSrc: iconHalp,
    secondIconSrc: iconJsm,
  },
  {
    id: "scorecards",
    company: "Atlassian Compass - Scorecards",
    image: imgCompass,
    link: "/compass-scorecards",
    iconSrc: iconCompass,
  },
  {
    id: "statuspage-migration",
    company: "Atlassian Statuspage - Identity Migration",
    image: imgStatuspage,
    link: "/statuspage-migration",
    iconSrc: iconStatuspage,
  },
];

function SectionHeader({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="font-['Poppins'] text-[12px] tracking-[0.15em] uppercase text-[#70b110] mb-2">
        {eyebrow}
      </p>
      <h2 className="font-['Poppins'] font-medium text-[28px] md:text-[32px] leading-[1.2] text-black">
        {heading}
      </h2>
    </div>
  );
}

function SkillPill({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="inline-block px-4 py-2 rounded-full bg-gray-100 text-[14px] font-['Poppins'] cursor-default transition-colors hover:bg-[#70b110] hover:text-white"
    >
      {label}
    </motion.span>
  );
}

function ProjectIcons({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <img
        src={project.iconSrc}
        alt=""
        className="h-10 w-auto shrink-0 object-contain"
        aria-hidden="true"
      />

      {project.secondIconSrc && (
        <>
          <span className="text-[22px] leading-none text-black shrink-0">→</span>
          <img
            src={project.secondIconSrc}
            alt=""
            className="h-10 w-auto shrink-0 object-contain"
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}

export default function InteractivePortfolio() {
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groupedSkills = useMemo(() => siteContent.skills.groups, []);

  useEffect(() => {
  const sectionIds = ["experience", "work", "about"];

  const handleScrollSpy = () => {
    if (window.scrollY < 120) {
      setActiveSection("");
      return;
    }

    const viewportAnchor = window.innerHeight * 0.35;
    let currentSection = "";

    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (!element) continue;

      const rect = element.getBoundingClientRect();

      if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
        currentSection = sectionId;
        break;
      }
    }

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScrollSpy);
  handleScrollSpy();

  return () => window.removeEventListener("scroll", handleScrollSpy);
}, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const navOffset = 60;
    const top = element.getBoundingClientRect().top + window.scrollY - navOffset;

    setActiveSection(sectionId);

    window.scrollTo({
      top,
      behavior: "smooth",
    });
};

  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed z-50 w-full flex justify-center py-6 bg-[#ffffff]/90 backdrop-blur-sm"
      >
        <div className="bg-white rounded-full flex gap-10 px-10 py-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer font-['Poppins'] font-medium text-[16px] capitalize transition-colors hover:text-[#70b110] relative ${
                activeSection === item.id ? "text-[#70b110]" : ""
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  style={{
                    background: `repeating-linear-gradient(
                      90deg,
                      #70b110 0px,
                      #70b110 4px,
                      transparent 4px,
                      transparent 6px
                    )`,
                    backgroundSize: "6px 2px",
                    transform: "scaleY(1) translateY(2px)",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <svg
                    className="w-full h-[3px]"
                    viewBox="0 0 100 3"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.5 Q 2.5 0, 5 1.5 T 10 1.5 T 15 1.5 T 20 1.5 T 25 1.5 T 30 1.5 T 35 1.5 T 40 1.5 T 45 1.5 T 50 1.5 T 55 1.5 T 60 1.5 T 65 1.5 T 70 1.5 T 75 1.5 T 80 1.5 T 85 1.5 T 90 1.5 T 95 1.5 T 100 1.5"
                      stroke="#70b110"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </motion.div>
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      <Container>
        {/* Hero Section */}
        <section
          id="hero"
          className="scroll-mt-[140px] pt-[100px] md:pt-[200px] lg:pt-[280px] pb-[100px] md:pb-[200px] lg:pb-[500px]"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="order-2 lg:order-1 max-w-[980px] flex-1"
            >
              <h1 className="font-['Yeseva_One'] text-[44px] md:text-[72px] leading-[1.1] mb-8">
                Hello, I’m <span className="text-[#70b110]">{siteContent.hero.name}</span>.
              </h1>
              <p className="font-['Poppins'] font-medium text-[28px] md:text-[54px] leading-[1.15]">
                A product designer and information architect focused on making complex systems feel simple and human.
              </p>

              <motion.button
                onClick={() => scrollToSection("skills")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-5 mt-16 group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[48px] h-[48px] rounded-full border-[2px] border-black flex items-center justify-center group-hover:bg-[#70b110] group-hover:border-[#70b110] transition-colors"
                >
                  <svg
                    className="w-8 h-8 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14m0 0-6-6m6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                <span className="font-['Poppins'] text-[12px] md:text-[13px] tracking-[0.25em] uppercase text-[#000000]">
                  Scroll to explore
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] shrink-0 mx-auto lg:ml-auto"
            >
              <Lottie
                animationData={heroAnimation}
                loop
                className="w-[300px] h-[300px] ml-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="scroll-mt-[140px] pt-[20px] md:pt-[40px] lg:pt-[80px] pb-20"
        >
          <SectionHeader
            eyebrow={siteContent.skills.eyebrow}
            heading={siteContent.skills.heading}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groupedSkills.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <h3 className="uppercase text-gray-400 mb-4 text-[12px] tracking-[0.15em] font-['Poppins']">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillPill key={item} label={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="scroll-mt-[140px] pt-[40px] md:pt-[100px] lg:pt-[140px] pb-20"
        >
          <SectionHeader eyebrow="What I've been up to" heading="My adventures" />
          <div className="space-y-0">
            {siteContent.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border-b border-[#70b110] border-solid"
              >
               {/* Mobile Layout - Two Column */}
                <div className="flex justify-between items-start py-6 md:hidden">
                  <p className="font-['Poppins'] font-light text-[14px] sm:text-[16px] leading-[1.4] pr-4 flex-1">
                    {item.role}
                  </p>
                  <p className="font-['Poppins'] font-light text-[14px] sm:text-[16px] leading-[1.4] text-right">
                    {item.company}
                  </p>
                </div>

                {/* Desktop Layout - Three Column */}
                <div className="hidden md:flex gap-[13px] items-center py-[35px]">
                  <div className="flex items-center w-[480px] shrink-0">
                    <p className="font-['Poppins'] font-light text-[18px] lg:text-[24px] leading-normal">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex flex-[1_0_0] items-center">
                    <p className="font-['Poppins'] font-light text-[18px] lg:text-[24px] leading-normal">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex flex-[1_0_0] items-center justify-end">
                    <p className="font-['Poppins'] font-light text-[18px] lg:text-[24px] leading-normal">
                      {item.period}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="scroll-mt-[140px] pt-[40px] md:pt-[100px] lg:pt-[140px] pb-20"
        >
          <div className="flex items-center gap-6 mb-2">
            <p className="font-['Poppins'] text-[12px] tracking-[0.15em] uppercase text-[#70b110]">
              What I've done
            </p>
          </div>

          <h2 className="font-['Poppins'] font-medium text-[32px] md:text-[32px] leading-[1.2] text-black mb-16">
            My work
          </h2>

          <div className="flex flex-col gap-40">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex flex-col gap-6"
              >
                <div
                  className={`${project.link ? "cursor-pointer" : ""}`}
                  onClick={() => {
                    if (project.link) {
                      navigate(project.link);
                    }
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto block rounded-[16px]"
                    whileHover={{ scale: 1.01, y: -4 }}
                    transition={{ duration: 0.35 }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 flex-wrap">
                    <ProjectIcons project={project} />
                    <p className="font-['Poppins'] font-medium text-[30px] md:text-[40px] leading-[1.2] text-[#2b2b2b]">
                      {project.company}
                    </p>
                  </div>

                  <h3 className="font-['Poppins'] font-light text-[18px] md:text-[24px] leading-[1.3] text-black">
                    {project.title}
                  </h3>

                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="scroll-mt-[140px] pt-[100px] md:pt-[200px] lg:pt-[280px] pb-60"
        >
          <SectionHeader eyebrow="A bit more" heading="About me" />

          <div className="flex flex-col lg:flex-row items-start gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.04, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-[320px] md:max-w-[380px] shrink-0"
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-[#70b110] opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500" />
                <img
                  src={imgAbout}
                  alt="Jessie with cat"
                  className="relative z-10 w-full aspect-square rounded-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-[900px] space-y-6"
            >
              {siteContent.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-['Poppins'] font-light text-[18px] md:text-[24px] leading-[1.5]"
                >
                  {paragraph}
                </p>
              ))}

              <a
                href="/jessie-brooke-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 pt-2 font-['Poppins'] font-medium italic text-[18px] md:text-[24px] leading-none text-black hover:text-[#70b110] transition-all duration-300 ease-out hover:translate-x-1.5 hover:-translate-y-0.5"
              >
                <span>Resume</span>
                <NorthEastIcon sx={{ fontSize: "0.9em" }} />
              </a>
            </motion.div>
          </div>
        </section>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}