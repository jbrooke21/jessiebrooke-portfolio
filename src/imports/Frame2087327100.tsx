import imgMyNotionFacePortrait1 from "../../assets/13b5eb362706e6d494b69c485849b7482a87704d.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-black">
      <p className="font-['Yeseva_One:Regular',sans-serif] relative shrink-0 text-[80px] whitespace-nowrap">
        <span className="leading-[1.2]">{`Hello, I’m `}</span>
        <span className="leading-[1.2] text-[#70b110]">Jessie</span>
        <span className="leading-[1.2]">{`. `}</span>
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[64px] w-[746px]">
        <span className="leading-[1.2]">A</span>
        <span className="font-['Inter:Medium_Italic',sans-serif] italic leading-[1.2]">{` product designer`}</span>
        <span className="leading-[1.2]">{` and information architect focused on making complex systems feel `}</span>
        <span className="font-['Inter:Medium_Italic',sans-serif] italic leading-[1.2] text-[#70b110]">simple</span>
        <span className="leading-[1.2]">{` and `}</span>
        <span className="font-['Inter:Medium_Italic',sans-serif] italic leading-[1.2] text-[#70b110]">human</span>
        <span className="leading-[1.2]">.</span>
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative size-full">
      <Frame1 />
      <div className="relative shrink-0 size-[489px]" data-name="my-notion-face-portrait 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMyNotionFacePortrait1} />
      </div>
    </div>
  );
}