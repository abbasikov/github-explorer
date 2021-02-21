import React from "react";
import { withTheme } from 'styled-components';
import styled from 'styled-components';

const StyledTopic = styled.div`
  width: 10%;
  box-shadow: 0 2px 5px 0 rgb(0 0 0/16%), 0 2px 10px 0 rgb(0 0 0/12%);
  margin-top:16px;
  margin-bottom:16px;
  padding:0.01em 16px;
  cursor: pointer;
  background-color:${props => props.theme.topic.backgroundColor};
  .name {
    text-decoration:underline;
  }
`

const Topic = (props)=>{
    let { name,stargazers } = props.topic;
    return (
        <StyledTopic>
            <p onClick={()=>{
                props.onTopicClicked(props.topic)
            }} className="name">{name}</p>
            <p>Stargazers Count:{stargazers.totalCount}</p>
        </StyledTopic>
    );
}

export default withTheme(Topic);