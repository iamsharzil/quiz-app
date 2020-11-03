import React, { FC } from 'react';

const ErrorMessage: FC<{ message?: string }> = ({ message }) => {
  return <div>OOPS!! Something went wrong.....</div>;
};

export default ErrorMessage;
