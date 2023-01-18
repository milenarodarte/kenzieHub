import styled from "styled-components";

const Button = styled.button`
  border: ${(props) => (props.border ? props.border : "none")};
  width: ${(props) => (props.width ? props.width : "8.125rem")};
  height: ${(props) => (props.height ? props.height : "3.75rem")};
  padding: ${(props) =>
    props.padding ? props.padding : "0rem 1.25rem 0rem 1.25rem"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0.5rem"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FF577F"};
  color: ${(props) => (props.fontColor ? props.fontColor : "#FFFFFF")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "120%")};
  cursor: pointer;
  :hover {
    background-color: ${(props) =>
      props.hoverBGColor ? props.hoverBGColor : "#FF427F"};
    color: ${(props) => (props.hoverColor ? props.hoverColor : "#FFF")};
  }
  :focus {
    background-color: #ff427f;
  }
`;

export default Button;
