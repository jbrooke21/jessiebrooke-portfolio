import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Lottie from "lottie-react";
import AnimatedFlowerPhoto from "./AnimatedFlowerPhoto";
import PaperAirplane from "./PaperAirplane";

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
        "Information architecture",
        "Style guides",
        "Pattern libraries",
        "Rapid prototyping",
        "UX strategy & vision",
      ],
    },
    {
      title: "Design & collaboration tools",
      items: [
        "Figma suite",
        "Framer",
        "Notion",
        "Adobe suite",
        "Google suite",
        "Microsoft suite",
        "Atlassian suite",
      ],
    },
    {
      title: "AI & dev tools",
      items: [
        "Claude",
        "ChatGPT",
        "Atlassian Intelligence",
        "Cursor",
        "V0",
        "Lovable",
        "Replit",
        "GitHub",
        "VS Code",
        "Vercel",
      ],
    },
    {
      title: "Research & process",
      items: [
        "User research",
        "User testing",
        "Analytical problem solving",
        "Synthesis",
        "Stakeholder engagement",
        "Cross-functional communication",
        "Documentation",
        "Process design",
      ],
    },
  ],
},

timeline: [
  { parent: "Atlassian", role: "Senior Product Designer", company: "Confluence", period: "2024–2025" },
  { parent: "Atlassian", role: "Senior Product Designer", company: "Jira Service Management", period: "2024" },
  { parent: "Atlassian", role: "Senior Product Designer", company: "Halp", period: "2022–2024" },
  { parent: "Atlassian", role: "Senior Product Designer", company: "Compass", period: "2021–2022" },
  { parent: "Atlassian", role: "Product Designer", company: "Statuspage", period: "2019–2021" },
  { role: "Product Designer -> UX Designer", company: "Symphony Communications", period: "2015–2019" },
  { role: "Newbie Freelancer", company: "Web Design", period: "2011–2014" },
],



  about: [
    "I’m a Bay Area–based product designer with over ten years of experience creating thoughtful, human-centered digital products. I’m especially interested in how people interact with information and the systems that shape their daily lives. ",
    "Outside of design, I’m an avid reader and lifelong bibliophile who loves horror and cheesy action films. I foster kittens and support local TNR efforts, and spend the rest of my time painting, drawing, or exploring the outdoors.",
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
    <div className="hidden md:flex items-center gap-2 shrink-0">
      <img
        src={project.iconSrc}
        alt=""
        className="h-7 sm:h-8 md:h-10 w-auto shrink-0 object-contain"
        aria-hidden="true"
      />

      {project.secondIconSrc && (
        <>
          <span className="text-[16px] sm:text-[18px] md:text-[22px] leading-none text-black shrink-0">
            →
          </span>
          <img
            src={project.secondIconSrc}
            alt=""
            className="h-7 sm:h-8 md:h-10 w-auto shrink-0 object-contain"
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
      {/* =========================================================
          NAVIGATION
      ========================================================= */}
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
        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section
          id="hero"
          className="scroll-mt-[140px] pt-[100px] md:pt-[200px] lg:pt-[250px] pb-[100px] md:pb-[200px] lg:pb-[500px]"
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
                className="order-1 lg:order-2 w-full max-w-[260px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[420px] shrink-0 mx-auto lg:ml-auto lg:mr-0"
              >
                <Lottie
                  animationData={heroAnimation}
                  loop
                  className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] mx-auto lg:ml-auto lg:mr-0"
                />
              </motion.div>
          </div>
        </section>

        {/* =========================================================
            SKILLS SECTION
        ========================================================= */}
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

            {/* =========================================================
                  EXPERIENCE SECTION
              ========================================================= */}
              <section
                id="experience"
                className="scroll-mt-[140px] pt-[40px] md:pt-[100px] lg:pt-[140px] pb-20"
              >
                {/* Intro block */}
               <div className="mb-14 md:mb-20">
                  <p className="font-['Poppins'] text-[12px] tracking-[0.15em] uppercase text-[#70b110] mb-0">
                    What I've been up to
                  </p>
                 
                  <div className="flex items-center gap-3 md:gap-6 mb-5 md:mb-6">
                    <h2 className="font-['Poppins'] font-medium text-[28px] md:text-[32px] leading-[1.2] text-black">
                      My adventures
                    </h2>
                    <PaperAirplane />
                  </div>

                  <p className="font-['Poppins'] font-light text-[18px] md:text-[22px] leading-[1.5] text-black/80">
                    Over the past decade, I’ve designed across collaboration and content creation, customer support, ITSM, developer experience and DevOps tooling, incident management, and fintech. I focus on helping teams make sense of complex systems throughout their workflows.
                  </p>
                </div>

                {/* Timeline */}
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
                      {/* Mobile Layout */}
                      <div className="block md:hidden py-6">
                        <div className="flex flex-col gap-1">
                          {item.parent && (
                            <p className="font-['Poppins'] font-light text-[13px] leading-[1.4] text-black/60">
                              {item.parent}
                            </p>
                          )}
                          <p className="font-['Poppins'] font-medium text-[16px] leading-[1.4]">
                            {item.company}
                          </p>
                          <p className="font-['Poppins'] font-light text-[16px] leading-[1.4]">
                            {item.role}
                          </p>
                          <p className="font-['Poppins'] font-light text-[16px] leading-[1.4] text-black/60">
                            {item.period}
                          </p>
                        </div>
                      </div>

                      {/* Desktop / Tablet Layout */}
                      <div className="hidden md:flex items-center gap-[40px] lg:gap-[60px] py-[35px]">
                        <div className="flex flex-col justify-center w-[260px] lg:w-[360px] shrink-0">
                          {item.parent && (
                            <p className="font-['Poppins'] font-light text-[13px] lg:text-[14px] leading-[1.4] text-black/60">
                              {item.parent}
                            </p>
                          )}
                          <p className="font-['Poppins'] font-light text-[18px] lg:text-[24px] leading-normal">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center flex-1 min-w-0">
                          <p className="font-['Poppins'] font-light text-[18px] lg:text-[24px] leading-normal">
                            {item.role}
                          </p>
                        </div>
                        <div className="hidden lg:flex items-center justify-end shrink-0 w-[180px]">
                          <p className="font-['Poppins'] font-light text-[18px] lg:text-[24px] leading-normal">
                            {item.period}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>


        {/* =========================================================
            WORK SECTION
        ========================================================= */}
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

          <div className="flex flex-col gap-12 md:gap-28 lg:gap-40">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex flex-col gap-5 md:gap-6"
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
                    className="w-full h-auto block rounded-[6px] md:rounded-[12px] border border-black"
                    whileHover={{ scale: 1.01, y: -4 }}
                    transition={{ duration: 0.35 }}
                  />
                </div>

                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex items-start gap-3 md:gap-4">
                    <ProjectIcons project={project} />
                    <p className="font-['Poppins'] font-normal md:font-medium text-[22px] sm:text-[26px] md:text-[40px] leading-[1.15] text-[#2b2b2b]">
                      {project.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================
    ABOUT SECTION
========================================================= */}
<section
  id="about"
  className="scroll-mt-[140px] pt-[80px] md:pt-[160px] lg:pt-[220px] pb-20 md:pb-30 lg:pb-40"
>
  <SectionHeader eyebrow="A bit more" heading="About me" />

  <div className="flex flex-col items-center lg:flex-row lg:items-start gap-16 md:gap-24">
    <AnimatedFlowerPhoto />

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

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </div>
  );
}