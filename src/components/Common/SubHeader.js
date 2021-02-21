import styled from 'styled-components';

const StyledSubHeader = styled.p`
  
`

export const SubHeader = ({ title,value }) => {
    return <StyledSubHeader><strong>{title}:</strong>&nbsp;{value}</StyledSubHeader>
}