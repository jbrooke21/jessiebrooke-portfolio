import { motion } from "motion/react";
import Footer from "./Footer";
import ProjectHeader from "./ProjectHeader";
import Container from "./container";

import confluenceIcon from "../../assets/confluence-icon.svg";
import heroImage from "../../assets/connie-mainpage.png";
import automationHeroBg from "../../assets/connie-mp4-background.png";
import automationHeroVideo from "../../assets/automation_hero.mp4";
import autoBg1 from "../../assets/auto-bg-1.jpeg";
import autoVideo1 from "../../assets/automation-1.mp4";
import autoBg2 from "../../assets/auto-bg-2.jpeg";
import autoVideo2 from "../../assets/automation-2.mp4";
import autoBg3 from "../../assets/auto-bg-3.jpeg";
import autoVideo3 from "../../assets/automation-3.mp4";

/* =========================================================
   MEDIA COMPONENTS
========================================================= */

function HeroVideoCard() {
  return (
    <div className="relative w-full rounded-[8px] md:rounded-[16px] overflow-hidden md:h-[760px]">
      
      {/* Background (hide on mobile) */}
      <img
        src={automationHeroBg}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Video */}
      <video
        src={automationHeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="
          w-full
          md:absolute md:top-[18%] md:left-[50%] md:-translate-x-1/2
          md:w-[60%]
          object-contain
          rounded-[6px] md:rounded-[12px]
          border border-black/10
        "
      />
    </div>
  );
}

function LargeFeatureCard() {
  return (
    <div className="relative w-full h-[340px] sm:h-[420px] md:h-[560px] lg:h-[760px] rounded-[6px] md:rounded-[16px] overflow-hidden border border-black">
      <img
        src={autoBg1}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        src={autoVideo1}
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute top-[50%] left-[50%]
          -translate-x-1/2 -translate-y-1/2
          w-[94%] sm:w-[92%]
          object-contain
          rounded-[6px] md:rounded-[12px]
        "
      />
    </div>
  );
}

function TriggerCard() {
  return (
    <div className="relative w-full h-[300px] sm:h-[360px] md:h-[380px] rounded-[6px] md:rounded-[16px] overflow-hidden border border-black">
      <img
        src={autoBg2}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        src={autoVideo2}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[90%] object-contain rounded-[6px] md:rounded-[12px]"
      />
    </div>
  );
}

function NotificationCard() {
  return (
    <div className="relative w-full h-[300px] sm:h-[360px] md:h-[380px] rounded-[6px] md:rounded-[16px] overflow-hidden border border-black">
      <img
        src={autoBg3}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        src={autoVideo3}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[84%] md:w-[84%] object-contain rounded-[6px] md:rounded-[12px]"
      />
    </div>
  );
}

/* =========================================================
   PAGE COMPONENT
========================================================= */

export default function ConfluenceAutomationPage() {
  return (
    <div className="bg-white min-h-screen relative w-full flex flex-col items-center">
      {/* Reusable project page header */}
      <ProjectHeader />

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
                alt="Confluence automations main page"
                className="w-full h-auto object-cover rounded-[6px] md:rounded-[12px] border border-black"
                src={heroImage}
              />
            </div>
          </Container>
        </div>

        {/* =========================================================
            PAGE TITLE / META
        ========================================================= */}
        <div className="mt-[52px] w-full">
          <Container>
            <div className="flex flex-col gap-[16px] items-start">
              <div className="flex items-start gap-3 md:gap-4">
                <img
                  src={confluenceIcon}
                  alt="Confluence"
                  className="hidden md:block w-[48px] h-[48px]"
                />
                <h1 className="font-['Poppins'] text-[28px] sm:text-[34px] md:text-[48px] leading-[1.1] text-[#292a2e]">
                  Atlassian Confluence – Automations
                </h1>
              </div>

              <div className="flex flex-col font-['Poppins'] font-light justify-center leading-[0] not-italic text-[20px] text-black">
                <p className="leading-[normal]">2023 - 2025</p>
              </div>
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
                  <p className="leading-[normal] mb-[24px]">
                    Atlassian Confluence is a shared workspace where teams create and manage 
                    documentation and project knowledge.
                    Confluence Automations introduced intelligent, event-based
                    workflows to reduce time spent on repetitive setup and manual
                    coordination work. I led the design of automation templates
                    powered by Atlassian Intelligence, helping the system detect
                    signals like page status changes, ownership updates, and page
                    movement.
                  </p>

                  <p className="leading-[normal] mb-[24px]">
                    These automations helped teams move more seamlessly from
                    documentation to execution, surfacing time-saving
                    opportunities in context and reducing recurring manual effort
                    across content operations.
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
                      Lead Product Designer (IA, rollout strategy, workflow
                      design, admin UX)
                    </span>
                  </p>
                </div>

                {/* =====================================================
                    CUSTOMER NEEDS / OUTCOMES
                ===================================================== */}
                <div className="flex flex-col font-['Poppins'] font-light justify-center w-full mt-10">
                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[1.3] text-black mb-[32px]">
                    Customers needed to:
                  </h3>

                  <ul className="list-disc pl-8 mb-[40px] space-y-4">
                    <li>
                      Reduce time spent on repetitive setup and coordination tasks
                    </li>
                    <li>
                      Turn content into action, whether generating artifacts or
                      triggering workflows
                    </li>
                    <li>Stay informed when key changes occurred</li>
                    <li>
                      Automate cross-tool actions such as sending Slack
                      notifications
                    </li>
                    <li>
                      Discover and enable automations contextually, without
                      complex setup
                    </li>
                    <li>
                      Maintain consistency in workflows, ownership, and
                      communication
                    </li>
                  </ul>

                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[1.3] text-black mb-[32px]">
                    Customer outcomes:
                  </h3>

                  <ul className="list-disc pl-8 space-y-4">
                    <li>
                      Saved time by automating high-frequency, repeatable tasks
                    </li>
                    <li>Faster transitions from documentation to execution</li>
                    <li>
                      Reduced manual coordination through automated notifications
                      and updates
                    </li>
                    <li>
                      Improved visibility into status, ownership, and structure
                      changes
                    </li>
                    <li>More consistent workflows across teams and tools</li>
                    <li>Enabled scalable, event-driven ways of working</li>
                  </ul>
                </div>
              </div>

              {/* =====================================================
                  FEATURE MEDIA SECTIONS
              ===================================================== */}
              <div className="w-full mt-16 flex flex-col">
                <div className="flex flex-col gap-40">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                  >
                    <HeroVideoCard />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                  >
                    <LargeFeatureCard />
                  </motion.div>
                </div>

                <div className="mt-8 flex flex-col gap-3 max-w-[760px]">
                  <h3 className="font-['Poppins'] font-medium text-[18px] leading-[1.3] text-black">
                    In-context automation
                  </h3>
                  <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
                    Embedding automation builders within common workflows made
                    time-saving opportunities visible in context, helping users
                    reduce repetitive work and streamline execution.
                  </p>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-3 md:gap-6"
                  >
                    <TriggerCard />

                    <div className="mt-3 md:mt-6 flex flex-col gap-2 md:gap-3">
                      <h4 className="font-['Poppins'] font-medium text-[18px] text-black">
                        Automated workflow triggers
                      </h4>
                      <p className="font-['Poppins'] font-light text-[15px] md:text-[16px] leading-[1.5] text-black">
                        Powered by Atlassian Intelligence, content creation could
                        trigger automatic generation of supporting artifacts,
                        reducing repetitive setup and saving time.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="flex flex-col gap-3 md:gap-6"
                  >
                    <NotificationCard />

                    <div className="mt-3 md:mt-6 flex flex-col gap-2 md:gap-3">
                      <h4 className="font-['Poppins'] font-medium text-[18px] text-black">
                        Automated team notifications
                      </h4>
                      <p className="font-['Poppins'] font-light text-[15px] md:text-[16px] leading-[1.5] text-black">
                        Extending this model to status changes, users could
                        automatically trigger Slack notifications, keeping teams
                        aligned and reducing manual communication.
                      </p>
                    </div>
                  </motion.div>
                </div>
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