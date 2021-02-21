import styled from 'styled-components';
import { withTheme } from 'styled-components';

const StyledSearch = styled.div`
  width: 100%;
  position: relative;
  display: flex;
 
  .searchTerm {
      width: 22%;
      border: 3px solid ${props => props.theme.searchBar.borderColor};;
      padding: 5px;
      height: 20px;
      border-radius: 5px 5px 5px 5px;
      outline: none;
  }
`

const Search = (props)=>{
    return (
        <StyledSearch>
            <input className="searchTerm" type="text" onKeyDown={(e)=>props.onEnter(e)} placeholder="Search for a topic"/>
        </StyledSearch>
    )
}

export default withTheme(Search);