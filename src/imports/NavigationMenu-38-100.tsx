function Frame() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[40px] items-center justify-center leading-[1.2] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Work</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Connect</p>
    </div>
  );
}

export default function NavigationMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[64px] py-[22px] relative size-full" data-name="Navigation menu">
      <Frame />
    </div>
  );
}