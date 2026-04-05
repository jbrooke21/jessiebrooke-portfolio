import { motion } from "motion/react";
import Footer from "./Footer";
import ProjectHeader from "./ProjectHeader";
import Container from "./container";
import statuspageIcon from "../../assets/statuspage-icon.svg";
import heroImage from "../../assets/statuspage-mainpage.png";
import phaseOneImage from "../../assets/sp-phase-1.png";
import phaseTwoImage from "../../assets/sp-phase-2.png";
import phaseThreeImage1 from "../../assets/new-user-newsite.png";
import phaseThreeImage2 from "../../assets/exst-user-exstsite.png";
import phaseThreeImage3 from "../../assets/exst-user-newsite.png";
import phaseThreeImage4 from "../../assets/end-journey.png";
import phaseFourImage from "../../assets/sp-migration-3.png";
import migrationBgImage from "../../assets/sp-background-1.png";
import migrationVideo from "../../assets/sp-migration-1.mp4";

/* =========================================================
   REUSABLE MEDIA COMPONENTS
========================================================= */

function FinalMigrationCard() {
  return (
    <div className="relative w-full h-[700px] rounded-[16px] overflow-hidden border border-black">
      <img
        src={migrationBgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        src={migrationVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[82%] md:w-[78%] max-w-[1100px] object-contain rounded-[12px] shadow-lg"
      />
    </div>
  );
}

/* =========================================================
   PAGE COMPONENT
========================================================= */

export default function StatuspageMigrationPage() {
  return (
    <div className="bg-white min-h-screen relative w-full flex flex-col items-center">
      {/* =========================================================
          REUSABLE PROJECT HEADER
      ========================================================= */}
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
        <div className="mt-[192px] w-full">
          <Container>
            <div className="rounded-[12px]">
              <img
                alt="Statuspage identity migration interface"
                className="w-full h-auto object-cover rounded-[12px] border border-black"
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
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-4">
                <img
                  src={statuspageIcon}
                  alt="Statuspage"
                  className="w-[56px] h-[56px] rounded-[16px]"
                />

                <h1 className="text-[48px] font-['Poppins'] font-medium text-[#292a2e] leading-[1.1]">
                  Atlassian Statuspage – Identity migrations
                </h1>
              </div>

              <p className="text-[20px] font-['Poppins'] font-light text-black leading-[1.4]">
                2019 – 2021
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
                  <p className="leading-[normal] mb-[24px]">
                    After Statuspage was acquired by Atlassian, it transitioned
                    from a standalone identity platform to Atlassian Identity and
                    Access. I led the end-to-end migration of accounts, login
                    flows, and authentication management, including adoption of
                    Atlassian Access for SSO. This multi-phase effort required
                    careful sequencing and clear communication to transition users
                    without disruption.
                  </p>

                  <p>
                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      Context:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      Post-acquisition platform integration
                    </span>
                    <br aria-hidden="true" />

                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      Scope:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      Identity + authentication migration
                    </span>
                    <br aria-hidden="true" />

                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      Timeline:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      ~1 year, 4 rollout phases
                    </span>
                    <br aria-hidden="true" />

                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      Users impacted:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      Account admins, team members, enterprise customers using
                      SSO
                    </span>
                    <br aria-hidden="true" />

                    <span className="font-['Poppins'] font-medium leading-[normal] not-italic">
                      My role:
                    </span>
                    <span className="leading-[normal]">
                      {" "}
                      Lead Product Designer – Migration UX, login & signup flows,
                      identity transition experience
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
                      Transition from a standalone identity system to a shared
                      ecosystem without disruption
                    </li>
                    <li>
                      Log in seamlessly despite changes to authentication flows
                      and account structures
                    </li>
                    <li>
                      Navigate mixed states where some users had Atlassian
                      accounts and others did not
                    </li>
                    <li>
                      Adopt new SSO and admin systems without losing access or
                      control
                    </li>
                    <li>
                      Avoid duplicate accounts caused by mismatched emails or
                      identity assumptions
                    </li>
                    <li>
                      Maintain access and continuity across a phased migration
                      rollout
                    </li>
                  </ul>

                  <h3 className="font-['Poppins'] font-medium text-[20px] leading-[1.3] text-black mb-[32px]">
                    Customer outcomes:
                  </h3>

                  <ul className="list-disc pl-8 space-y-4">
                    <li>
                      Users transitioned to Atlassian Identity without disruption
                      or account lockouts
                    </li>
                    <li>
                      Login and account selection flows supported both legacy and
                      Atlassian credentials during migration
                    </li>
                    <li>
                      Mixed account states were clearly handled, reducing
                      confusion and support burden
                    </li>
                    <li>
                      Duplicate accounts and login errors were minimized through
                      improved identity mapping
                    </li>
                    <li>
                      Customers successfully adopted Atlassian Access and
                      centralized admin controls
                    </li>
                    <li>
                      A phased rollout enabled a safe transition at scale without
                      breaking access
                    </li>
                  </ul>
                </div>
              </div>

              {/* =====================================================
                  PHASE 1 + PHASE 2
              ===================================================== */}
              <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-full h-[340px] md:h-[380px] rounded-[12px] overflow-hidden border border-black">
                    <img
                      src={phaseOneImage}
                      alt="Phase 1 Statuspage migration"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-['Poppins'] font-medium text-[20px] text-black">
                      Phase 1 – Stop legacy account creation
                    </h3>
                    <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
                      New Statuspage accounts had to be created through the
                      Atlassian ecosystem, ending new signup on the legacy
                      identity system and establishing a consistent future entry
                      point.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-full h-[340px] md:h-[380px] rounded-[12px] overflow-hidden border border-black">
                    <img
                      src={phaseTwoImage}
                      alt="Phase 2 Statuspage migration"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-['Poppins'] font-medium text-[20px] text-black">
                      Phase 2 – Dual login transition
                    </h3>
                    <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
                      New users created outside the Atlassian ecosystem shifted to
                      Atlassian Identity from the start, while legacy users could
                      still log in. During this overlap, organizations could exist
                      under different authentication systems at the same time.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* =====================================================
                  PHASE 3
              ===================================================== */}
              <div className="w-full mt-12 flex flex-col gap-8">
                <div className="flex flex-col gap-3 max-w-[980px]">
                  <h3 className="font-['Poppins'] font-medium text-[20px] text-black">
                    Phase 3 – Sign up flow expansion
                  </h3>
                  <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
                    Atlassian signup flows were extended to support multiple
                    Statuspage scenarios, including new sites, existing sites, and
                    existing Atlassian accounts, reducing account duplication and
                    confusion.
                  </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-3"
                  >
                    <img
                      src={phaseThreeImage1}
                      alt="New user, new site"
                      className="w-full h-auto rounded-[12px] border border-black"
                    />
                    <p className="font-['Poppins'] font-light text-[15px] md:text-[16px] text-black text-center">
                      New user, new site
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.04 }}
                    className="flex flex-col gap-3"
                  >
                    <img
                      src={phaseThreeImage2}
                      alt="Existing user, existing site"
                      className="w-full h-auto rounded-[12px] border border-black"
                    />
                    <p className="font-['Poppins'] font-light text-[15px] md:text-[16px] text-black text-center">
                      Existing user, existing site
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="flex flex-col gap-3"
                  >
                    <img
                      src={phaseThreeImage3}
                      alt="Existing user, new site"
                      className="w-full h-auto rounded-[12px] border border-black"
                    />
                    <p className="font-['Poppins'] font-light text-[15px] md:text-[16px] text-black text-center">
                      Existing user, new site
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                    className="flex flex-col gap-3"
                  >
                    <img
                      src={phaseThreeImage4}
                      alt="All roads lead to creation"
                      className="w-full h-auto rounded-[12px] border border-black"
                    />
                    <p className="font-['Poppins'] font-light text-[15px] md:text-[16px] text-black text-center">
                      All roads lead to creation
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* =====================================================
                  PHASE 4
              ===================================================== */}
              <div className="w-full mt-12 flex flex-col gap-8">
                <div className="flex flex-col gap-3 max-w-[980px]">
                  <h3 className="font-['Poppins'] font-medium text-[20px] text-black">
                    Phase 4 – Full account & SSO migration
                  </h3>
                  <p className="font-['Poppins'] font-light text-[16px] md:text-[18px] leading-[1.5] text-black">
                    Legacy Statuspage users were migrated to Atlassian Identity,
                    and organizations adopted Atlassian Access as their new SSO
                    and admin platform. This phase required coordinating multiple
                    admin and end-user journeys across a phased rollout.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                >
                  <img
                    src={phaseFourImage}
                    alt="Phase 4 identity migration flow"
                    className="w-full h-auto rounded-[12px]"
                  />
                </motion.div>
              </div>

              {/* =====================================================
                  FINAL MIGRATION VISUAL
              ===================================================== */}
              <div className="w-full mt-[64px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                >
                  <FinalMigrationCard />
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