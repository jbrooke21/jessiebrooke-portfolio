import imgEllipse2 from "../../assets/fa32267c9e6e0c63e930dfdb2f6575c28402b9ba.png";

export default function Frame() {
  return (
    <div className="content-stretch flex items-center pl-[128px] pt-[56px] relative size-full">
      <div className="relative shrink-0 size-[100px]">
        <img alt="" className="absolute block max-w-none size-full" height="100" src={imgEllipse2} width="100" />
      </div>
    </div>
  );
}