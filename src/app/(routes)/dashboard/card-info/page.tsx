import React from "react";
import CardInfoTable from "@/tables/CardInfoTable";

const CardInfo = () => {
  return (
    <div className="p-12 h-screen relative">
      <CardInfoTable />
      <button
        className={`absolute bottom-50 right-80 px-8 py-1 text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-[5px] transition text-[10px] cursor-pointer`}
      >
        Freeze
      </button>
    </div>
  );
};

export default CardInfo;
