import imgQueueChecklist1 from "../../assets/260b8ded44468a22770bad04f9e4491a3e65cd19.png";
import imgEllipse2 from "../../assets/fa32267c9e6e0c63e930dfdb2f6575c28402b9ba.png";

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 pl-[128px] pt-[56px] top-0 w-[1512px]">
      <div className="relative shrink-0 size-[100px]">
        <img alt="" className="absolute block max-w-none size-full" height="100" src={imgEllipse2} width="100" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[703px]">
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">2023 - 2025</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(8.33%+2px)] top-[1059px] w-[1255px]">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#292a2e] text-[64px] w-[min-content]">
        <p className="leading-[normal]">{`Atlassian Halp to JSM `}</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">Project overview</p>
      </div>
      <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-center relative shrink-0 w-full">
        <p className="leading-[normal] mb-[16px]">Halp was sunset, requiring every customer to either migrate their data to Jira Service Management (JSM) or export it for use in another tool. This migration impacted global enterprise admins, site-level admins, agents, and end users; often across large, distributed organizations with mission-critical support workflows.</p>
        <p className="leading-[normal] mb-[16px]">The goal was to enable customers to migrate safely, incrementally, and on their own timelines, while minimizing risk, downtime, and support burden during a high-stakes transition.</p>
        <p>
          <span className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic">Timeline:</span>
          <span className="leading-[normal]">
            {` 6-7 months`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic">Team:</span>
          <span className="leading-[normal]">
            {` Product, Engineering, Product Design, Content Design`}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic">My role:</span>
          <span className="leading-[normal]">{` Lead Product Designer (Migration strategy, workflow design, admin UX)`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return <div className="h-[14px] shrink-0 w-full" />;
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[calc(8.33%+2px)] top-[1228px] w-[1255px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function MacBookPro() {
  return (
    <div className="bg-white h-[1771px] overflow-clip relative shrink-0 w-full" data-name="MacBook Pro 14' - 2">
      <div className="absolute h-[815px] left-[calc(8.33%+2px)] rounded-[12px] top-[192px] w-[1255px]" data-name="queue_checklist 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgQueueChecklist1} />
      </div>
      <Frame5 />
      <Frame1 />
      <Frame4 />
    </div>
  );
}

export default function Halp() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Halp">
      <MacBookPro />
    </div>
  );
}