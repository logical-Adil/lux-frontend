"use client";

import React, { useEffect, useState } from "react";
import CreateAccountHeader from "./CreateAccountHeader";
import CreateAccountTable from "./create-account-table";
import { ColumnDef } from "@tanstack/react-table";
import { Check } from "lucide-react";
import { BiLoaderCircle } from "react-icons/bi";
import DeclinedModal from "@/modal/DeclinedModal";
import KycModal from "@/modal/KycModal";

// ✅ Types
export type Transaction = {
  id: string;
  transactionNo: string;
  currency: string;
  qty: number;
  usdValue: string;
  walletAddress: string;
  status: "Complete" | "Pending" | "Declined";
  type: "Card A" | "Card B";
  kycStatus: "Processing" | "Completed" | "Pending" | "Declined";
  paymentStatus: "Processing" | "Completed" | "Pending" | "Declined";
};

// ✅ Test Data
const data: Transaction[] = [
  {
    id: "1",
    transactionNo: "TXN-1001",
    currency: "USDT",
    qty: 200,
    usdValue: "200",
    walletAddress: "0xabc...123",
    status: "Complete",
    type: "Card A",
    kycStatus: "Completed",
    paymentStatus: "Completed",
  },
  {
    id: "2",
    transactionNo: "TXN-1004",
    currency: "USDT",
    qty: 150,
    usdValue: "150",
    walletAddress: "0xjkl...000",
    status: "Pending",
    type: "Card B",
    kycStatus: "Completed",
    paymentStatus: "Pending",
  },
  {
    id: "3",
    transactionNo: "TXN-1005",
    currency: "USDT",
    qty: 80,
    usdValue: "80",
    walletAddress: "0xxyz...789",
    status: "Pending",
    type: "Card A",
    kycStatus: "Processing",
    paymentStatus: "Completed",
  },
  {
    id: "4",
    transactionNo: "TXN-1003",
    currency: "USDT",
    qty: 300,
    usdValue: "300",
    walletAddress: "0xghi...789",
    status: "Pending",
    type: "Card A",
    kycStatus: "Pending",
    paymentStatus: "Pending",
  },
  {
    id: "5",
    transactionNo: "TXN-1006",
    currency: "USDT",
    qty: 80,
    usdValue: "80",
    walletAddress: "0xxyz...888",
    status: "Complete",
    type: "Card A",
    kycStatus: "Completed",
    paymentStatus: "Declined",
  },
  {
    id: "6",
    transactionNo: "TXN-1002",
    currency: "USDC",
    qty: 100,
    usdValue: "100",
    walletAddress: "0xdef...456",
    status: "Declined",
    type: "Card B",
    kycStatus: "Declined",
    paymentStatus: "Processing",
  },
];

// ✅ Table Columns
// const columns: ColumnDef<Transaction>[] = [
//   { accessorKey: "transactionNo", header: "Transaction No." },
//   { accessorKey: "currency", header: "Currency" },
//   { accessorKey: "qty", header: "Qty" },
//   { accessorKey: "usdValue", header: "USD Value" },
//   { accessorKey: "walletAddress", header: "Wallet Address" },
//   { accessorKey: "status", header: "Status" },
//   { accessorKey: "type", header: "Type" },
//   {
//     header: "Action",
//     cell: ({ row }) => {
//       const { kycStatus, paymentStatus } = row.original;

//       const renderKycButton = () => {
//         if (kycStatus === "Processing") {
//           return (
//             <button className="bg-gray-400 text-[var(--theme-gray)] px-10 py-2 rounded-[5px] text-xs font-medium flex items-center gap-1">
//               KYC <BiLoaderCircle className="animate-spin" />
//             </button>
//           );
//         }

//         if (kycStatus === "Completed") {
//           return (
//             <button className="border border-[var(--theme-green)] text-[var(--theme-green)]  px-10 py-2 rounded-[5px] text-xs font-medium flex items-center gap-1">
//               KYC
//               <Check className="w-4 h-4" />
//             </button>
//           );
//         }

//         if (kycStatus === "Pending") {
//           return (
//             <button className=" bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white px-10 py-2 rounded-[5px] text-xs font-medium">
//               KYC
//             </button>
//           );
//         }

//         if (kycStatus === "Declined") {
//           return (
//             <button className="bg-[var(--theme-red)] text-white px-10 py-2 rounded-[5px] text-xs font-medium">
//               Declined
//             </button>
//           );
//         }

//         return null;
//       };

//       const renderPayButton = () => {
//         if (paymentStatus === "Processing") {
//           return (
//             <button className="bg-gray-400 text-[var(--theme-gray)]  px-10 py-2 rounded-[5px] text-xs font-medium flex items-center gap-1">
//               Pay <BiLoaderCircle className="animate-spin" />
//             </button>
//           );
//         }

//         if (paymentStatus === "Completed") {
//           return (
//             <button className="border border-[var(--theme-green)] text-[var(--theme-green)]  px-10 py-2 rounded-[5px] text-xs font-medium flex items-center gap-1">
//               Paid
//               <Check className="w-4 h-4" />
//             </button>
//           );
//         }

//         if (paymentStatus === "Pending") {
//           return (
//             <button className=" bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white px-10 py-2 rounded-[5px] text-xs font-medium">
//               Pay
//             </button>
//           );
//         }

//         if (paymentStatus === "Declined") {
//           return (
//             <button className="bg-[var(--theme-red)] text-white px-10 py-2 rounded-[5px] text-xs font-medium">
//               Declined
//             </button>
//           );
//         }

//         return null;
//       };

//       return (
//         <div className="flex space-x-2">
//           {renderKycButton()}
//           {renderPayButton()}
//         </div>
//       );
//     },
//   },
// ];

// ✅ Main Component
const CreateAccount = () => {
  const columns: ColumnDef<Transaction>[] = [
    { accessorKey: "transactionNo", header: "Transaction No." },
    { accessorKey: "currency", header: "Currency" },
    { accessorKey: "qty", header: "Qty" },
    { accessorKey: "usdValue", header: "USD Value" },
    { accessorKey: "walletAddress", header: "Wallet Address" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "type", header: "Type" },
    {
      header: "Action",
      cell: ({ row }) => {
        const { kycStatus, paymentStatus } = row.original;

        const renderKycButton = () => {
          if (kycStatus === "Processing") {
            return (
              <button className="bg-gray-400 text-[var(--theme-gray)] px-10 py-2 rounded text-xs font-medium flex items-center gap-1">
                KYC <BiLoaderCircle className="animate-spin" />
              </button>
            );
          }

          if (kycStatus === "Completed") {
            return (
              <button className="border border-[var(--theme-green)] text-[var(--theme-green)]  px-10 py-2 rounded text-xs font-medium flex items-center gap-1">
                KYC
                <Check className="w-4 h-4" />
              </button>
            );
          }

          if (kycStatus === "Pending") {
            return (
              <>
                <KycModal />
                {/* <button
                onClick={() => kycPendingStateFun(row.original)}
                className=" bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white px-10 py-2 rounded text-xs font-medium"
              >
                KYC
              </button> */}
              </>
            );
          }

          if (kycStatus === "Declined") {
            return (
              <>
                <DeclinedModal />

                {/* <button
                  onClick={() => kycDeclinedStateFun(row.original)}
                  className="bg-[var(--theme-red)] text-white px-10 py-2 rounded text-xs font-medium"
                >
                  Declined
                </button> */}
              </>
            );
          }

          return null;
        };

        const renderPayButton = () => {
          if (paymentStatus === "Processing") {
            return (
              <button className="bg-gray-400 text-[var(--theme-gray)] px-10 py-2 rounded text-xs font-medium flex items-center gap-1">
                Pay <BiLoaderCircle className="animate-spin" />
              </button>
            );
          }

          if (paymentStatus === "Completed") {
            return (
              <button className="border border-[var(--theme-green)] text-[var(--theme-green)]  px-10 py-2 rounded text-xs font-medium flex items-center gap-1">
                Paid
                <Check className="w-4 h-4" />
              </button>
            );
          }

          if (paymentStatus === "Pending") {
            return (
              <button className=" bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] text-white px-10 py-2 rounded text-xs font-medium">
                Pay
              </button>
            );
          }

          if (paymentStatus === "Declined") {
            return (
              <>
                <DeclinedModal />
                {/* <button className="bg-[var(--theme-red)] text-white px-10 py-2 rounded text-xs font-medium">
                   Declined {" "}
                </button> */}
              </>
            );
          }

          return null;
        };

        return (
          <div className="flex justify-center space-x-2">
            {renderKycButton()}
            {renderPayButton()}
          </div>
        );
      },
    },
  ];

  // const kycPendingStateFun = (row: Transaction) => {
  //   console.log("🚀 ~ kycPendingStateFun ~ item:", row);
  // };

  // const kycDeclinedStateFun = (row: Transaction) => {
  //   console.log("🚀 ~ kycDeclinedStateFun ~ item:", row);
  // };

  const [dataState, setDataState] = useState<Transaction[]>([]);

  useEffect(() => {
    setDataState(data);
  }, []);

  return (
    <div className="p-12 min-h-full">
      <div
        className="rounded-sm p-10"
        style={{
          background: `
            radial-gradient(135.33% 135.33% at 5.71% -44.13%, #303337 0%, rgba(26, 26, 26, 0.27) 100%),
            linear-gradient(0deg, #1E2229, #1E2229),
            linear-gradient(180deg, #1D1D1D 0%, #292929 100%),
            linear-gradient(180deg, #073E3A 0%, #052725 100%),
            linear-gradient(180deg, #1D1D1D 0%, #292929 100%)`,
          boxShadow: "0px 0px 20px 0px #00000066",
        }}
      >
        <CreateAccountHeader />
        <CreateAccountTable columns={columns} data={dataState} />
      </div>
    </div>
  );
};

export default CreateAccount;
