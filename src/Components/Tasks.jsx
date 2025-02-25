export const Tasks = ({ box, bg, text }) => {
  return (
    <div
      className={`w-[414px] h-[813px] absolute -translate-1/2 bg-blue-500 rounded-[50px] drop-sepia-[12px] ${box} flex flex-col items-center`}
    >
      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-center gap-4">
          <div className="pl-[40px] pt-[56px] pr-[122px] w-[164px] h-[25px] text-gray-400 text-[18px]">
            2025
          </div>
          <div className="w-[174px] h-[66px] text-[44px] font-extrabold">
            {text}
          </div>
        </div>

        <img
          src="/localization_icon.svg"
          alt="loc"
          className="text-gray-400 w-[32px] h-[32px] mt-[20px]"
        />
      </div>
      <div
        className={` w-[265px] h-[265px] flex items-center justify-center ${bg}`}
      ></div>
    </div>
  );
};
