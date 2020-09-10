import React from 'react';

const InfoTextLoan = ({ message: { type, amount, member } }) => {
  return (
    <h2>
      {member} applied for a {type} with a total amount of KES{' '}
      {amount.toLocaleString()}
    </h2>
  );
};

export default InfoTextLoan;
