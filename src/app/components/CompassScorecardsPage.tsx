import { motion } from "motion/react";
import Footer from "./Footer";
import ProjectHeader from "./ProjectHeader";
import Container from "./container";
import compassVideo2 from "../../assets/compass-2.mp4";
import compassVideo3 from "../../assets/compass-3.mp4";
import compassIcon from "../../assets/compass.svg";
import heroImage from "../../assets/compass-mainpage.png";
import compassVideo1 from "../../assets/compass-1.mp4";
import createScorecardImage from "../../assets/create-scorecard.png";
import compassImage2 from "../../assets/compass-2.jpeg";
import compassImage3 from "../../assets/compass-3.jpeg";

/* =========================================================
   PAGE COMPONENT
========================================================= */

export default function CompassScorecardsPage() {
  return (
    <div className="bg-white min-h-screen relative w-full flex flex-col items-center">
      {/* =========================================================
          REUSABLE PROJECT HEADER
      ========================================================= */}
      <ProjectHeader />

      {/* =========================================================
          PAGE FADE WRAPPER
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="w-full flex flex-col items-center"
      >
        {/* =========================================================
            HERO IMAGE
        ========================================================= */}
        <div className="mt-[160px] md:mt-[192px] w-full">
          <Container>
            <div className="rounded-[6px] md:rounded-[12px]">
              <img
                alt="Compass Scorecards interface"
                className="w-full h-auto object-cover rounded-[6px] md:rounded-[12px] border border-black"
                src={heroImage}
              />
            </div>
          </Container>
        </div>

        {/* =========================================================
            TITLE SECTION
        ========================================================= */}
        <div className="mt-[52px] w-full">
          <Container>
            <div className="flex flex-col gap-[16px] items-start">
              <div className="flex items-start gap-3 md:gap-4">
                <img
                  src={compassIcon}
                  alt="Compass"
                  className="hidden md:block w-[48px] h-[48px]"
                />

                <h1 className="font-['Poppins'] text-[28px] sm:text-[34px] md:text-[48px] leading-[1.1] text-[#292a2e]">
                  Atlassian Compass – Scorecards
                </h1>
              </div>

              <p className="text-[20px] font-['Poppins'] font-light text-black leading-[1.4]">
                2021 – 2022
              </p>
            </div>
          </Container>
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <div className="mt-[64px] mb-[160px] w-full">
          <Container>
            <div className="flex flex-col gap-[64px] items-start">
              {/* =====================================================
                  PROJECT OVERVIEW
              ===================================================== */}
              <div className="flex flex-col gap-[24px] items-start not-italic text-[20px] text-black w-full">
                <div className="flex flex-col font-['Poppins'] font-medium justify-center w-full">
                  <p className="leading-[normal]">Project overview</p>
                </div>

                <div className="flex flex-col font-['Poppins'] font-light justify-center w-full">
                  <p className="leading-[normal] mb-[32px]">
                    When Compass entered Beta, I led the first iteration of the
                    Scorecards feature, which enabled teams to evaluate the health
                    of their software components using customizable best-practice
                    criteria. I ran research with DevOps and platform engineers to
                    identify which signals and standards they rely on, and how
                    they determine whether a service is healthy, at risk, or
                    failing.
                  </p>

                  <p className="leading-[normal] mb-[16px]">
                    Those findings shaped the scoring model, criteria structure,
                    and evaluation experience, turning complex operational
                    concepts into a practical, configurable framework teams could
                    apply across their services.
                  </p>

                  <p>
                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      Team:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      Product, Engineering, Product Design
                    </span>
                    <br aria-hidden="true" />
                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      My role:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      Lead Product Designer (rollout strategy, workflow design,
                      admin UX)
                    </span>
                  </p>
                </div>

                {/* =====================================================
                    CUSTOMER NEEDS
                ===================================================== */}
                <div className="flex flex-col font-['Poppins'] font-light justify-center w-full mt-10 max-w-[1100px]">
                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[1.3] text-black mb-[32px]">
                    Customers needed to:
                  </h3>

                  <ul className="list-disc pl-8 mb-[40px] space-y-4">
                    <li>
                      Define what “software health” means across teams with
                      different practices and maturity levels
                    </li>
                    <li>
                      Translate complex operational signals into clear,
                      trustworthy health indicators
                    </li>
                    <li>
                      Understand whether a service is healthy, at risk, or
                      failing, and what to do next
                    </li>
                    <li>
                      Customize health criteria without creating confusion or
                      inconsistency
                    </li>
                    <li>
                      Apply a consistent framework across diverse services and
                      architectures
                    </li>
                    <li>
                      Quickly assess health while still enabling deeper
                      investigation when needed
                    </li>
                  </ul>

                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[1.3] text-black mb-[32px]">
                    Customer outcomes:
                  </h3>

                  <ul className="list-disc pl-8 space-y-4">
                    <li>
                      Teams gained a clear, shared understanding of software
                      health across services
                    </li>
                    <li>
                      Complex operational signals were transformed into intuitive,
                      actionable scores through a research-driven scoring model
                    </li>
                    <li>
                      Health states became meaningful and decision-driving through
                      carefully designed thresholds and evaluation UX
                    </li>
                    <li>
                      Teams could define and adapt criteria while maintaining
                      consistency and trust
                    </li>
                    <li>
                      A flexible scoring framework scaled across different service
                      types and architectures
                    </li>
                    <li>
                      Users could move from quick assessment to deeper diagnostics
                      within the same experience
                    </li>
                  </ul>
                </div>
              </div>

              {/* =====================================================
                  SCORECARD DETAILS + BENEFITS
              ===================================================== */}
              <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                >
                  <video
                    src={compassVideo1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-[6px] md:rounded-[12px] border border-black"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="flex flex-col gap-4"
                >
                  <div className="bg-[#f1f1f1] rounded-[6px] md:rounded-[12px] p-6">
                    <h3 className="font-['Poppins'] font-medium text-[20px] text-black mb-3">
                      Instant health signal
                    </h3>
                    <p className="font-['Poppins'] font-light text-[16px] leading-[1.5] text-black">
                      Teams could quickly understand whether a service was
                      healthy, at risk, or failing through clear score
                      visualization and status indicators.
                    </p>
                  </div>

                  <div className="bg-[#f1f1f1] rounded-[6px] md:rounded-[12px] p-6">
                    <h3 className="font-['Poppins'] font-medium text-[20px] text-black mb-3">
                      Faster path to improvement
                    </h3>
                    <p className="font-['Poppins'] font-light text-[16px] leading-[1.5] text-black">
                      Teams could move from signal to action faster by seeing
                      which criteria were failing and where to focus first.
                    </p>
                  </div>

                  <div className="bg-[#f1f1f1] rounded-[6px] md:rounded-[12px] p-6">
                    <h3 className="font-['Poppins'] font-medium text-[20px] text-black mb-3">
                      Clear responsibility and reach
                    </h3>
                    <p className="font-['Poppins'] font-light text-[16px] leading-[1.5] text-black">
                      Ownership, labels, and usage made it easier to understand
                      who a scorecard applied to and how broadly it was being used
                      across components.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* =====================================================
                  CREATE SCORECARDS IMAGE
              ===================================================== */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full mt-32"
              >
                <img
                  src={createScorecardImage}
                  alt="Compass scorecards overview"
                  className="w-full h-auto rounded-[6px] md:rounded-[12px]"
                />
              </motion.div>

              {/* =====================================================
    TWO SMALLER IMAGE SECTIONS
===================================================== */}
<div className="w-full mt-8 flex flex-col gap-24 gap-48">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-8 items-start mt-16 md:mt-32"
  >
    <div className="w-full">
      <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-[6px] md:rounded-[16px] overflow-hidden border border-black">
        <img
          src={compassImage2}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <video
          src={compassVideo2}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[88%] md:w-[80%] lg:w-[76%] object-contain rounded-[6px] md:rounded-[12px]"
        />
      </div>
    </div>

    <div className="w-full max-w-[420px]">
      <h3 className="font-['Poppins'] font-medium text-[20px] mb-4 text-black">
        Criteria that felt clear and actionable
      </h3>
      <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
        The scorecard experience needed to make abstract operational
        standards concrete, so teams could understand what each
        health signal meant and what needed attention.
      </p>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-8 items-start"
  >
    <div className="w-full max-w-[420px] order-2 md:order-1">
      <h3 className="font-['Poppins'] font-medium text-[20px] mb-4 text-black">
        Flexible enough for different teams
      </h3>
      <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
        Scorecards had to support variation across services and team
        maturity while still giving organizations a consistent way
        to evaluate software health.
      </p>
    </div>

    <div className="w-full order-1 md:order-2">
      <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-[6px] md:rounded-[16px] overflow-hidden border border-black">
        <img
          src={compassImage3}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <video
          src={compassVideo3}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[88%] md:w-[80%] lg:w-[76%] object-contain rounded-[6px] md:rounded-[12px]"
        />
      </div>
    </div>
  </motion.div>
</div>
</div>
</Container>
</div>
</motion.div>
      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </div>
  );
}