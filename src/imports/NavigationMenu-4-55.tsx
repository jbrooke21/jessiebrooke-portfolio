function Frame() {
  return (
    <div className="bg-[#d1e722] h-[30px] overflow-clip relative rounded-[30px] shrink-0 w-[80px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.2] left-[20px] not-italic text-[16px] text-black top-[9px] whitespace-nowrap">Work</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Frame />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">About</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Connect</p>
    </div>
  );
}

export default function NavigationMenu() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center justify-center overflow-clip px-[64px] py-[22px] relative rounded-[30px] size-full" data-name="Navigation menu">
      <Frame1 />
    </div>
  );
}