import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #2a2d2a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px 16px 0px; 
  cursor: pointer;
`

export const Button = ({title, onClick}) => {
    return <StyledButton onClick={onClick}>{title}</StyledButton>
}
