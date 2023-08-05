"use client ";
import { VisaData } from "@/data";
import { useClickAway } from "@/hooks";
import Image from "next/image";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

type VisaType = {
  type: string;
};

type OptionProps = {
  onSelect: (visa: any) => void;
  options: VisaType[];
  onSearch: Dispatch<SetStateAction<string>>;
  ref: RefObject<HTMLDivElement>;
};

const OptionsDropDown = (props: OptionProps) => {
  const { onSelect, options, onSearch, ref } = props;

  return (
    <div className="absolute z-[2] max-h-[15rem]   rounded-md flex flex-col items-center bg-white border w-full bottom-[110%] left-0 ">
      <div
        ref={ref}
        className="w-full border p-2 flex items-center sticky top-0 left-0"
      >
        <button className="w-[15%]">
          <CiSearch className="text-gray-400" />
        </button>
        <input
          onChange={(e) => onSearch(e.target.value)}
          type="text"
          className="w-[85%] focus:outline-none h-full placeholder:text-gray-400"
          placeholder="Search"
        />
      </div>
      <div className="w-full overflow-auto p-2">
        {options.length > 0 ? (
          options.map((option, i) => (
            <button
              key={i}
              onClick={() => onSelect(option)}
              className="hover:bg-black hover:text-white w-full p-1 text-left rounded-sm flex items-center gap-2"
            >
              <span className="text-[1rem] text-gray-400">{option.type}</span>
            </button>
          ))
        ) : (
          <button className="hover:bg-black hover:text-white w-full p-1 text-left rounded-sm text-gray-400">
            No item found
          </button>
        )}
      </div>
    </div>
  );
};

type DropDownType = {
  onChange: Dispatch<SetStateAction<string>>;
  label: string;
};

function VisaDropDown(props: DropDownType) {
  const { onChange, label } = props;
  const [searchName, setSearchName] = useState("");
  const DropDownRef = useRef<HTMLDivElement>(null);
  const FilterVisa = VisaData.filter((visa) =>
    visa.type.toLowerCase().includes(searchName.toLowerCase())
  );
  const [selectedVisa, setSelectedVisa] = useState(() => FilterVisa[0]);
  const [toggle, setToggle] = useState(false);
  const clickOut = () => {
    setToggle(false);
  };
  useClickAway(DropDownRef, clickOut);

  const handleSelect = (option) => {
    onChange(option.type);
    setSelectedVisa(option);
    setToggle(false);
  };

  return (
    <div className="relative cursor-pointer rounded-md border w-full h-full border-black">
      {toggle ? (
        <OptionsDropDown
          ref={DropDownRef}
          onSelect={handleSelect}
          options={FilterVisa}
          onSearch={setSearchName}
        />
      ) : (
        ""
      )}
      <div
        onClick={() => setToggle(!toggle)}
        className="flex p-2 w-full h-full items-center justify-between"
      >
        <div className="w-[80%] flex items-center gap-2">
          <span>{selectedVisa.type}</span>
        </div>
        <button className="flex w-[20%] flex-col items-center justify-center">
          <MdKeyboardArrowDown className="h-6 w-6 " />
        </button>
      </div>
      <small className="absolute top-0 left-[5%] -translate-y-[55%] text-[.7rem]  bg-white w-fit">
        {label}
      </small>
    </div>
  );
}

export default VisaDropDown;
