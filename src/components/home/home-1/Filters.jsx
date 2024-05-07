import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";

const Filters = () => {
  return (
    <div className="md:max-w-[80%] w-full mx-auto relative -mt-16 sm:-mt-28">
      <div className="bg-white card card-shadow dark:shadow-none">
        <h1 className="text-lg font-bold">predict the price for your property</h1>
        <div className="z-40 flex-col mt-4 gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row ">
          <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark md:!bg-transparent">
              <h1 className="font-bold">city</h1>
              <div className="flex-align-center gap-x-2">
                <BiMap />
                <input
                  type="text"
                  className="w-full bg-transparent border-0 outline-none"
                  placeholder="Enter location of the property"
                />
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-300 hidden md:block dark:bg-dark-light "></div>
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark md:!bg-transparent">
              <h1 className="font-bold">Property Type</h1>
              <div className="flex-align-center gap-x-2">
                <BiBuildings />
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark md:!bg-transparent"
                >
                  <option value="condors">house</option>
                  <option value="offfice buildings">local commercial </option>
                  <option value="apartments">Apartments</option>
                  <option value="mansions">Villa</option>
                </select>
              </div>
            </div>
          </div>
          <div className="h-10 w-[1px] bg-slate-300 hidden md:block dark:bg-dark-light "></div>
          <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark md:!bg-transparent">
              <h1 className="font-bold">Bathroom</h1>
              <div className="flex-align-center gap-x-2">
              
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark md:!bg-transparent"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4 </option>
                </select>
              </div>
            </div>

            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark md:!bg-transparent">
              <h1 className="font-bold">Room </h1>
              <div className="flex-align-center gap-x-2">
              
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark md:!bg-transparent"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4 </option>
                </select>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-300 hidden md:block dark:bg-dark-light "></div>
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark md:!bg-transparent">
              <h1 className="font-bold">For</h1>
              <div className="flex-align-center gap-x-2">
                <BiBriefcase />
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark md:!bg-transparent"
                >
                  <option value="Buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
            </div>
          </div>
          <button className="w-full btn btn-primary md:w-fit">search</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
