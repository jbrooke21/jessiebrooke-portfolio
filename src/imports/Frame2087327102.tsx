import svgPaths from "./svg-g10ddz0ar6";
import imgEllipse1 from "../../assets/7c4777e8c1e9510dfbae46f7f6056d3be32bc433.png";

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-end left-0 p-[8px] top-[81px] w-[1253px]">
      <p className="font-['Inter:Medium',sans-serif] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[0] not-italic relative shrink-0 text-[64px] text-black whitespace-nowrap">
        <span className="leading-[1.2]">{`About `}</span>
        <span className="leading-[1.2] text-[#70b110]">me</span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white overflow-clip relative shrink-0 size-[375px]">
      <div className="absolute left-0 size-[375px] top-0">
        <img alt="" className="absolute block max-w-none size-full" height="375" src={imgEllipse1} width="375" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-black whitespace-pre-wrap">
        <p className="mb-0">{`I’m a Bay Area–based user experience and product designer with over ten years of experience creating thoughtful, human-centered digital products. At my core, I’m deeply curious about how people interact with information and the systems that shape their daily lives. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Outside of design, I’m an avid reader and lifelong bibliophile with a love for horror and cheesy action films. Cat lover and foster kitten volunteer supporting local TNR efforts. Also enjoy painting, drawing, and exploring the outdoors.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[163px]">
      <p className="absolute font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[1.2] left-0 text-[32px] text-black top-[5px] whitespace-nowrap">Resume</p>
      <div className="-translate-y-1/2 absolute aspect-[24/24] left-[80.37%] overflow-clip right-0 top-1/2" data-name="arrow_outward">
        <div className="absolute inset-[23.79%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7767 16.7767">
            <path d={svgPaths.p16dbfef0} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[375px] items-start justify-between relative shrink-0 w-[778px]">
      <Frame />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-[160px] w-[1253px]">
      <Frame1 />
      <Frame5 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-0 left-0 top-px w-[1255px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1255 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeDasharray="12 12" x2="1255" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[615px] w-[1255px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1255 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeDasharray="12 12" x2="1255" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame3 />
      <Frame6 />
    </div>
  );
}