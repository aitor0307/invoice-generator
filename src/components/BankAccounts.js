import React from 'react';

const BankAccounts = () => {
  // Parse the environment variable to get key-value pairs
  const bankAccounts = process.env.REACT_APP_BANK_ACCOUNTS.split(',').map(pair => {
    const [text, value] = pair.split(':');
    return { text, value };
  });

  return (
    <>
      {bankAccounts.map((option) => (
        <option value={option.value}>
          {option.text}
        </option>
      ))}
    </>
  );
};

export default BankAccounts;