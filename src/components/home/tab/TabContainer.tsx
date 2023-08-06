"use client";
import { CountryDropDown } from "@/components/form";
import VisaDropDown from "@/components/form/VisaDropDown";
import { Spinner } from "@/components/ui";
import React, { Dispatch, SetStateAction, useState } from "react";

type TabProps = {
  name: string;
  active?: boolean;
  setTab: Dispatch<SetStateAction<string>>;
  tab?: string;
};

const TabButton = (props: TabProps) => {
  const { name, active, setTab, tab } = props;
  return (
    <button
      className={` ${
        name === tab ? "bg-blue-400 text-white" : ""
      } flex-1 font-semibold p-2  text-xs lg:text-base rounded-[1rem]`}
      onClick={() => setTab(name)}
    >
      {name}
    </button>
  );
};

type Props = {};

const TabContainer = (props: Props) => {
  const [tab, setTab] = useState("Flight");
  const [change, setChange] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <div className="rounded-lg  bg-white lg:translate-y-[-5rem] p-2 translate-y-[-.2rem]   w-[90%] lg:w-[80%] shadow-lg">
      <div className=" w-full flex flex-col items-center" id="tab">
        <div className="w-full lg:w-[30%] flex justify-between text-center  p-2 rounded-[1.5rem] bg-gray-200">
          <TabButton name="Flight" setTab={setTab} tab={tab} />
          <TabButton name="Visa" setTab={setTab} tab={tab} />
          <TabButton name="Stay" setTab={setTab} tab={tab} />
        </div>
      </div>
      <form onSubmit={handleSubmit} id="form" className="w-full mt-[1rem]">
        <div className="flex  flex-col lg:flex-row lg:justify-between items-center gap-4">
          <div className="w-[90%] lg:w-[30%]">
            <CountryDropDown onChange={setChange} label="Home Country" />
          </div>
          <div className="w-[90%] lg:w-[30%]">
            <CountryDropDown onChange={setChange} label="Destination" />
          </div>
          <div className="w-[90%] lg:w-[30%]">
            <VisaDropDown onChange={setChange} label="" />
          </div>
        </div>
        <div className=" w-full mt-4 flex items-center justify-center">
          <button className="rounded-md p-2 text-center w-[40%] bg-blue-400 text-white flex flex-col items-center justify-center">
            {!loading ? <span> Search</span> : <Spinner />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TabContainer;
