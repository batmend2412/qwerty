import { Input } from "./Input";
import { Tasks } from "./Tasks";
export const Day = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-stone-100 h-screen w-[50%] rounded-bl-[30px] flex flex-col justify-center">
        <div className="flex gap-[10px] w-[30%] h-[40px] bg-white rounded-[50px]  ">
          <img src="/search.svg" alt="search" className="w-[30px] h-[30px]" />
          <Input> </Input>
        </div>

        <Tasks box={"left-[18%] bg-stone-50"} bg={"bg-[url(/sun.png)]"}>
          hell0
        </Tasks>
      </div>
      <div className="bg-gray-950 h-screen w-[50%] rounded-br-[30px] flex flex-col justify-center">
        <Tasks
          box={"right-[18%] bg-gray-700"}
          bg={"bg-[url(/moon.png)]"}
          text={"Bejing"}
        >
          hell0
        </Tasks>
      </div>
    </div>
  );
};
