import React from 'react';
import CreateAccountHeader from './CreateAccountHeader';
import CreateAccountTable from '@/tables/CreateAccountTable';

const CreateAccount = () => {
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
          linear-gradient(180deg, #1D1D1D 0%, #292929 100%)
        `,
          boxShadow: '0px 0px 20px 0px #00000066',
        }}
      >
        <CreateAccountHeader />
        <CreateAccountTable />
      </div>
    </div>
  );
};

export default CreateAccount;
