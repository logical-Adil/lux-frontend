import { cardInfoData } from "@/constants";
import ActionCardModal from "@/modal/ActionCardModal";
import { Table } from "@mantine/core";
import React from "react";

const CardInfoTable = () => {
  return (
    <div>
      <Table
        horizontalSpacing="sm"
        className="text-black"
        verticalSpacing="sm"
        withRowBorders
      >
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Card Number</th>
            <th className="px-4 py-2 text-left">Balance</th>
            <th className="px-4 py-2 text-left">
              <ActionCardModal />
              {/* <button className={`px-12 py-1 text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-sm transition text-[10px] cursor-pointer`}>Action</button> */}
            </th>
          </tr>
        </thead>
        <tbody>
          {cardInfoData.map((card) => (
            <tr key={card.id} className="border-b">
              <td className="px-4 py-2">{card.number}</td>
              <td className="px-4 py-2">{card.Balance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CardInfoTable;
