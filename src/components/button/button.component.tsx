import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  background-color: ${colors.green};
  color: ${colors.white};
  border: none;
  padding: 1rem 0;
  width: 20rem;
  position: absolute;
  right: 0;
  bottom: -5rem;
`;

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <StyledButton onClick={onClick} className="next--btn" type="button">
      {title}
    </StyledButton>
  );
};

export default Button;
