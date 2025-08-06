import React from 'react';

interface ConfirmTransactionModelProps {
  onBack: () => void;
}

const ConfirmTransactionModel: React.FC<ConfirmTransactionModelProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col space-y-6">
      <h2>Confirm Transaction</h2>
      {/* Your actual UI */}
      <button onClick={onBack} className="px-4 py-2 bg-gray-600 text-white rounded">
        Back
      </button>
    </div>
  );
};

export default ConfirmTransactionModel;
