"use client";

import { Select } from "@mantine/core";
import { useState, useRef, useEffect } from "react";

interface Transaction {
  id: string;
  transactionNo: string;
  currency: string;
  qty: number;
  usdValue: string;
  walletAddress: string;
  status: "Complete" | "Pending" | "Declined";
  type: "Card A" | "Card B";
  kycStatus: "KYC" | "Declined";
  paymentStatus: "Paid" | "Pay";
}

const CreateAccountTable = () => {
  // Sample data matching your image
  const transactions: Transaction[] = [
    {
      id: "1",
      transactionNo: "12345678...",
      currency: "ETH",
      qty: 25,
      usdValue: "$50,000",
      walletAddress: "nwl23r1394...",
      status: "Complete",
      type: "Card A",
      kycStatus: "KYC",
      paymentStatus: "Paid",
    },
    {
      id: "2",
      transactionNo: "12345678...",
      currency: "ETH",
      qty: 25,
      usdValue: "$50,000",
      walletAddress: "nwl23r1394...",
      status: "Pending",
      type: "Card B",
      kycStatus: "KYC",
      paymentStatus: "Pay",
    },
    {
      id: "3",
      transactionNo: "12345678...",
      currency: "ETH",
      qty: 25,
      usdValue: "$50,000",
      walletAddress: "nwl23r1394...",
      status: "Pending",
      type: "Card A",
      kycStatus: "KYC",
      paymentStatus: "Paid",
    },
    {
      id: "4",
      transactionNo: "12345678...",
      currency: "ETH",
      qty: 25,
      usdValue: "$50,000",
      walletAddress: "nwl23r1394...",
      status: "Pending",
      type: "Card B",
      kycStatus: "KYC",
      paymentStatus: "Paid",
    },
    {
      id: "5",
      transactionNo: "12345678...",
      currency: "ETH",
      qty: 25,
      usdValue: "$50,000",
      walletAddress: "nwl23r1394...",
      status: "Pending",
      type: "Card A",
      kycStatus: "Declined",
      paymentStatus: "Paid",
    },
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col sm:flex-row flex-wrap sm:items-center sm:justify-between my-3 gap-4 lg:gap-2 mb-8">
        <Select
          placeholder="Select Row"
          className="placeholder:text-gray-600"
          bg={"dark"}
          data={["React", "Angular", "Vue", "Svelte"]}
        />
        {/* <h1 className="text-sm sm:text-base">Select Rows</h1> */}
        <input
          type="text"
          className="w-full max-w-sm p-1 px-2 bg-white text-black placeholder:text-gray-600 placeholder:text-xs rounded-[3px]"
          placeholder="Search by transaction No"
        />
      </div>

      <div className="overflow-x-auto ">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr className="border">
              <th className="px-6 py-3 text-left text-xs font-medium  capitalize tracking-wider">
                Transaction No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  capitalize tracking-wider">
                Currency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  capitalize tracking-wider">
                QTY
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  capitalize tracking-wider">
                USD value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  capitalize tracking-wider">
                To wallet address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  capitalize tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  capitalize tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  capitalize tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Table Row Component
const TableRow = ({ transaction }: { transaction: Transaction }) => {
  return (
    <tr className="">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        {transaction.transactionNo}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">
        <div className="flex items-center">
          <span className="text-green-500 mr-1">✅</span>
          {transaction.currency}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">
        {transaction.qty}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">
        {transaction.usdValue}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm ">
        {transaction.walletAddress}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge status={transaction.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {transaction.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <div className="flex space-x-2">
          <ActionDropdown
            type="kyc"
            status={transaction.kycStatus}
            transactionId={transaction.id}
          />
          <ActionDropdown
            type="payment"
            status={transaction.paymentStatus}
            transactionId={transaction.id}
          />
        </div>
      </td>
    </tr>
  );
};

// Status Badge Component
const StatusBadge = ({ status }: { status: Transaction["status"] }) => {
  const statusStyles = {
    Complete: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Declined: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

// Action Dropdown Component
const ActionDropdown = ({
  type,
  status,
  transactionId,
}: {
  type: "kyc" | "payment";
  status: string;
  transactionId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Different actions based on dropdown type
  const getActions = () => {
    if (type === "kyc") {
      return ["Verify KYC", "Request Documents", "Reject KYC"];
    }
    return ["Mark as Paid", "Refund", "View Receipt"];
  };

  const actions = getActions();

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`inline-flex justify-center items-center px-3 py-1.5 text-xs font-medium rounded-[5px] border ${
          status === "Declined"
            ? "bg-red-100 text-red-700 border-red-200"
            : "bg-gray-100 text-gray-700 border-gray-300"
        } hover:bg-gray-200 focus:outline-none`}
      >
        {status}
        <span className="ml-1">▼</span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-[5px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu">
            {actions.map((action) => (
              <button
                key={action}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => console.log(`${action} for ${transactionId}`)}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccountTable;
