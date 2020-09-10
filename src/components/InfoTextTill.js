import React from 'react';

const InfoTextTill = ({ message: { type, amount, user } }) => {
  return (
    <h2>
      {user} applied for a {type} with a total amount of KES{' '}
      {amount.toLocaleString()}
    </h2>
  );
};

export default InfoTextTill;
