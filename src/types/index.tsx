import { StaticImageData } from 'next/image';

export type CardData = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  balance: number;
  date: string;
};

export type TransactionData = {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
};

export type QuarterlyData = {
  id: number;
  quarter: string;
  amount: string;
  value: number;
  color: string;
  fill: string;
  date: string;
};

export type CardInfoType = {
  id: string;
  number: string;
  Balance: string;
};

export type TransactionTableType = {
  id: string;
  timestamp: string;
  balance: string;
  action: string;
};
