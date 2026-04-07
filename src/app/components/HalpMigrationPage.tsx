import { motion } from "motion/react";
import Footer from "./Footer";
import ProjectHeader from "./ProjectHeader";
import Container from "./container";

import imgQueueChecklist1 from "../../assets/halp-mainpage.png";
import imgHalpSlack from "../../assets/halp-slack.png";
import video1 from "../../assets/halp-admin-1.mp4";
import video2 from "../../assets/halp-admin-2.mp4";
import video3 from "../../assets/halp-admin-3.mp4";
import halpIcon from "../../assets/halp-icon.svg";
import jsmIcon from "../../assets/jsm-icon.svg";

/* =========================================================
   PAGE COMPONENT
========================================================= */

export default function HalpMigrationPage() {
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
                alt="Halp migration interface"
                className="w-full h-auto object-cover rounded-[6px] md:rounded-[12px] border border-black"
                src={imgQueueChecklist1}
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
                  src={halpIcon}
                  alt="Halp"
                  className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]"
                />

                <span className="text-[28px]">→</span>

                <img
                  src={jsmIcon}
                  alt="Jira Service Management"
                  className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]"
                />

                <h1 className="font-['Poppins'] text-[28px] sm:text-[34px] md:text-[48px] leading-[1.1] text-[#292a2e]">
                  Atlassian Halp to JSM
                </h1>
              </div>

              <p className="text-[20px] font-['Poppins'] font-light text-black leading-[1.4]">
                2022 – 2023
              </p>
            </div>
          </Container>
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <div className="mt-[64px] mb-[100px] w-full">
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
                    Halp was a chat-based support tool integrated with Slack and
                    Microsoft Teams, turning conversations into structured tickets
                    and serving as a primary support system for many teams. Its
                    sunset required all customers to migrate to JSM or export
                    their data, impacting admins, agents, and end users across
                    complex, distributed organizations.
                  </p>

                  <p className="leading-[normal] mb-[16px]">
                    The goal was to enable customers to migrate safely,
                    incrementally, and on their own timelines, while minimizing
                    risk, downtime, and support burden during a high-stakes
                    transition.
                  </p>

                  <p>
                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      Timeline:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      6-7 months
                      <br aria-hidden="true" />
                    </span>

                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      Team:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      Product, Engineering, Product Design, Content Design
                      <br aria-hidden="true" />
                    </span>

                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      My role:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      Lead Product Designer (Migration strategy, workflow design,
                      admin UX)
                    </span>
                  </p>
                </div>

                {/* =====================================================
                    CUSTOMER NEEDS / DESIGN CONSIDERATIONS
                ===================================================== */}
                <div className="flex flex-col font-['Poppins'] font-light justify-center w-full mt-12">
                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[1.3] text-black mb-[32px]">
                    Customers needed to:
                  </h3>

                  <ul className="list-disc pl-8 mb-[40px] space-y-4">
                    <li>
                      Preserve critical ticket history, workflows, and permissions
                    </li>
                    <li>Avoid breaking active support processes</li>
                    <li>
                      Migrate at different times across multiple teams and sites
                    </li>
                    <li>
                      Validate the new system before moving production data
                    </li>
                    <li>
                      Or export their data clearly if they chose another platform
                    </li>
                  </ul>

                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[1.3] text-black mb-[32px]">
                    At the same time, we had to balance creating:
                  </h3>

                  <ul className="list-disc pl-8 space-y-4">
                    <li>A controlled, repeatable migration path</li>
                    <li>
                      Clear separation of responsibilities across admin roles
                    </li>
                    <li>Reduce migration-related support and failure risk</li>
                    <li>
                      A confusing or irreversible experience could result in data
                      loss, broken workflows, or customer churn.
                    </li>
                  </ul>

                  {/* =====================================================
                      MIGRATION MESSAGING IMAGE
                  ===================================================== */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full mt-40"
                  >
                    <img
                      src={imgHalpSlack}
                      alt="Halp migration messaging in Slack"
                      className="w-full h-auto rounded-[6px] md:rounded-[12px]"
                    />
                  </motion.div>
                </div>
              </div>

              {/* =====================================================
                  FEATURE MEDIA SECTIONS
              ===================================================== */}
              <div className="w-full mt-32 flex flex-col gap-40">
                {/* =====================================================
                    SECTION 1
                ===================================================== */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-start gap-12"
                >
                  <div className="w-full md:w-2/3">
                    <video
                      src={video1}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-[6px] md:rounded-[12px] border border-black"
                    />
                  </div>

                  <div className="w-full md:w-1/3">
                    <h3 className="font-['Poppins'] font-medium text-[20px] mb-4 text-black">
                      Migration kickoff and data options
                    </h3>
                    <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
                      The global admin initiated the migration by creating and
                      connecting to an Atlassian site. They could also export
                      their data from Halp, with guided steps provided.
                    </p>
                  </div>
                </motion.div>

                {/* =====================================================
                    SECTION 2
                ===================================================== */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-start gap-12"
                >
                  <div className="w-full md:w-1/3">
                    <h3 className="font-['Poppins'] font-medium text-[20px] mb-4 text-black">
                      Guided queue migration
                    </h3>
                    <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
                      Once the global admin connected an Atlassian site, site
                      admins could begin migrating their individual queues. We
                      provided a step-by-step process that could be completed all
                      at once or at their own pace.
                    </p>
                  </div>

                  <div className="w-full md:w-2/3 order-1 md:order-2">
                    <video
                      src={video2}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-[6px] md:rounded-[12px] border border-black"
                    />
                  </div>
                </motion.div>

                {/* =====================================================
                    SECTION 3
                ===================================================== */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-start gap-12"
                >
                  <div className="w-full md:w-2/3">
                    <video
                      src={video3}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-[6px] md:rounded-[12px] border border-black"
                    />
                  </div>

                  <div className="w-full md:w-1/3">
                    <h3 className="font-['Poppins'] font-medium text-[20px] mb-4 text-black">
                      Activating the service project
                    </h3>
                    <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
                      Making the final connection to a JSM project migrates the
                      queue, allowing agents to begin using it as a service
                      project in JSM.
                    </p>
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