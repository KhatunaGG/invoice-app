import Filter from "./conponents/Filter";
import Invoice from "./conponents/Invoice";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-8 mt-8 justify-center w-[87.2%] md:gap-y-[55px] md:w-[87.5%] md:mt-[61px] lg:w-[50.69%] lg:gap-y-[64px] mx-auto lg:mx-0 lg:min-w-[730px]   lg:ml-[17.5%]">
      <Filter />
      <Invoice />
    </div>
  );
}
