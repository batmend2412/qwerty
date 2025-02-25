import { Circle } from "@/Components/Circle";
import { Day } from "@/Components/Day";
import { Input } from "@/Components/Input";
import { Tasks } from "@/Components/Tasks";
export default function Home() {
  return (
    <div className="flex justify-center items-center relative ">
      <div className=" absolute flex justify-center items-center ">
        <Circle></Circle>
        <Circle className={" w-[340px] h-[340px]"}></Circle>
        <Circle className={" w-[640px] h-[640px]"}></Circle>
        <Circle className={" w-[940px] h-[940px]"}></Circle>
        <Circle className={" w-[1240px] h-[1240px]"}></Circle>
      </div>
      <Day></Day>
    </div>
  );
}
