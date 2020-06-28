import React from "react";
import styled from "styled-components";

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme: "primary" | "secondary" | "tertiary";
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */

const themes = {
  primary: {},
  secondary: { color: "blue" },
  tertiary: { color: "red" },
};

const Button = ({ children, onClick, theme }: ButtonProps) => {
  return (
    <Buttons style={themes[theme]} onClick={onClick}>
      {children}
    </Buttons>
  );
};

Button.defaultProps = {
  theme: "primary",
};

export default Button;

const Buttons = styled.button`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`;
