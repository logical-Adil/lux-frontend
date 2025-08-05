import { CardData, TransactionData, QuarterlyData, CardInfoType, TransactionTableType } from '@/types';

//    <--------- Navtab Overview Components Data ----------->

const balanceCardData = {
  id: 1,
  type: 'balance',
  description: 'Last recharged',
  title: 'Balance',
  amount: '1.234',
  lastRecharged: 'Last recharged',
  date: '24/08/24',
};

const recentTransactionsData: TransactionData[] = [
  {
    id: 1,
    icon: '🎮',
    title: 'GTR 5',
    subtitle: 'Gadget & Gear',
    amount: '160.00',
    date: '17 May 2023',
  },
  {
    id: 2,
    icon: '🛍️',
    title: 'T Shirt',
    subtitle: 'XL fashions',
    amount: '20.00',
    date: '16 May 2023',
  },
  {
    id: 3,
    icon: '🏪',
    title: 'Sandwich',
    subtitle: 'Walmart',
    amount: '10.00',
    date: '13 May 2023',
  },
  {
    id: 4,
    icon: '🚗',
    title: 'Taxi Fare',
    subtitle: 'Uber',
    amount: '12.00',
    date: '8 May 2023',
  },
  {
    id: 5,
    icon: '🛍️',
    title: 'Keyboard',
    subtitle: 'Gadget & Gear',
    amount: '22.00',
    date: '2 May 2023',
  },
];

const quarterlyExpenditureData: QuarterlyData[] = [
  {
    id: 1,
    quarter: 'Jul-Sept',
    date: 'JUL-SEP', // ⬅ added date field
    amount: '2,450.00',
    value: 2450,
    color: '#fbbf24',
    fill: '#fbbf24',
  },
  {
    id: 2,
    quarter: 'Oct-Dec',
    date: 'OCT-DEC', // ⬅ added date field
    amount: '1,890.00',
    value: 1890,
    color: '#fcd34d',
    fill: '#fcd34d',
  },
  {
    id: 3,
    quarter: 'Jan-Mar',
    date: 'JAN-MAR', // ⬅ added date field
    amount: '3,120.00',
    value: 3120,
    color: '#fdba74',
    fill: '#fdba74',
  },
  {
    id: 4,
    quarter: 'Apr-Jun',
    date: 'APR-JUN', // ⬅ added date field
    amount: '2,780.00',
    value: 2780,
    color: '#fb923c',
    fill: '#fb923c',
  },
];

const overviewCardData: CardData[] = [
  {
    id: 1,
    imageUrl: '/profile.png',
    title: 'Savings Account',
    description: 'Your main savings account.',
    balance: 1250.75,
    date: '2025-08-01',
  },
  {
    id: 2,
    imageUrl: '/profile.png',
    title: 'Business Account',
    description: 'Used for daily business transactions.',
    balance: 5400.0,
    date: '2025-08-02',
  },
  {
    id: 3,
    imageUrl: '/profile.png',
    title: 'Crypto Wallet',
    description: 'Holding USDT and ETH.',
    balance: 300.45,
    date: '2025-08-03',
  },
  {
    id: 4,
    imageUrl: '/profile.png',
    title: 'Travel Fund',
    description: 'Money set aside for travel expenses.',
    balance: 900.0,
    date: '2025-08-04',
  },
];

const cardInfoData: CardInfoType[] = [
  {
    id: '1',
    number: '**** **** **** 1234',
    Balance: '$2,500.00',
  },
  {
    id: '2',
    number: '**** **** **** 5678',
    Balance: '$1,200.50',
  },
];

const transactionsData: TransactionTableType[] = [
  {
    id: '1',
    timestamp: '23.06.2025 16:53:31',
    balance: '$2,500.00',
    action: 'Recharge',
  },
  {
    id: '2',
    timestamp: '23.06.2025 16:53:31',
    balance: '$1,750.50',
    action: 'Withdrawal',
  },
];

export { overviewCardData, balanceCardData, recentTransactionsData, quarterlyExpenditureData, cardInfoData, transactionsData };
