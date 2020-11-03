import React, { FC } from 'react';
import styled from 'styled-components';

const WrapperStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10rem;
`;

const Wrapper: FC = ({ children }) => {
  return <WrapperStyles>{children}</WrapperStyles>;
};

export default Wrapper;
