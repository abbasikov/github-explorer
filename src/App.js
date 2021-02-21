import React, { useState,  } from 'react';
import './App.css';
import { Wrapper, Header, SubHeader, Button } from "./components/Common";
import Search from "./components/Search/Search";
import Topic from "./components/Topic/Topic";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "styled-components";
import { useTheme } from './hooks/useTheme';

import { getAllRelatedTopics } from './services/api';

const App = ()=> {
    let [topic, setTopic] = useState({});
    const { selectedTheme,setMode } = useTheme();

    const renderTopics = ()=>{
        if(!topic.name){
            return null;
        }
        return topic.relatedTopics.map(topic=>{
            return <Topic key={topic.name} topic={topic} onTopicClicked={onTopicClicked}/>
        });
    }

    const onSearchEnter = async (e)=>{
        if (e.key === 'Enter') {
            let response = await getAllRelatedTopics(e.target.value);
            setTopic(response.topic);
        }
    }

    const onTopicClicked = async (topic)=>{
        let response = await getAllRelatedTopics(topic.name);
        setTopic(response.topic);
    }

    const toggleTheme = (e)=>{
        if(selectedTheme.name === 'Light'){
            setMode('seaWave');
        }else{
            setMode('light');
        }
    }

    return (
      <ErrorBoundary>
          <ThemeProvider theme={selectedTheme}>
              <Wrapper>
                  <Header>Github Explorer</Header>
                  <SubHeader title={'Topic Selected'} value={topic.name}/>
                  <SubHeader title={'Stargazer Count'} value={topic.stargazerCount}/>
                  <Button title='Toggle Theme' onClick={toggleTheme}/>
                  <Search onEnter={onSearchEnter}/>
                  {
                      renderTopics()
                  }
              </Wrapper>
          </ThemeProvider>
      </ErrorBoundary>

  );
}

export default App;
