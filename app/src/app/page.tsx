'use client';
import FrontPageEarth from './FrontPageEarth';
import React, { useState } from 'react';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import Logo from './Logo';

const Home = () => {
    const [selectedTopic, setSelectedTopic] = useState("deforestation");
    const [selectedCountry, setSelectedCountry] = useState("tz");
    // 0 - 100
    const filterStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      boxShadow: 'inset 0px 0px 30vw 10vw rgb(0,0,0)',
      pointerEvents: 'none'
    } as React.CSSProperties;

    const screenStyle = {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      overflow: 'hidden'
    }

  const handleButtonClick = () => {
    window.location.href = `/${selectedTopic}/${selectedCountry}`;;
  };

  return (
    <div style={screenStyle}>
      <FrontPageEarth />
      <div style={filterStyle}></div>
      <div style={{
        position: 'fixed',
        top: '32vh',
        left: '10vw',
        color: 'white',
        textAlign: 'left',
        zIndex: 100,
      }}>
        <h1 className="title">How do political decisions affect<br />
        <Select defaultValue="deforestation" id="named-select" name="named-select">
          <Option value="deforestation">deforestation</Option>
        </Select>
          in 
        <Select 
          value={selectedCountry}
          onChange={(event, value) => {
            if (value !== null) {
              setSelectedCountry(value);
            }
          }} 
          id="country" 
          name="country"
        >
          <Option value="tz">Tanzania</Option>
          <Option value="fi">Finland</Option>
          <Option value="se">Sweden</Option>
          <Option value="fr">France</Option>
          <Option value="dk">Denmark</Option>
          <Option value="ua">Ukraine</Option>
          <Option value="nl">The Netherlands</Option>
          <Option value="pg">Papua New Guinea</Option>
          <Option value="de">Germany</Option>
          <Option value="pt">Portugal</Option>
          <Option value="it">Italy</Option>
          <Option value="pl">Poland</Option>
          <Option value="cz">Czechia</Option>
          <Option value="hu">Hungary</Option>
          <Option value="gr">Greece</Option>
          <Option value="es">Estonia</Option>
        </Select>
          ?</h1>
      </div>
      <button className='btn' style={{
        position: 'fixed',
        top: '62vh',
        right: '10vw',
        fontSize: '22px',
        backgroundColor: 'rgba(255,255,255,0.9)',
        fontWeight: '550',
        color: 'black'
      }}
      onClick={handleButtonClick}
      >
        {'Find out >'}
      </button>
      <Logo />
    </div>
  );
}

export default Home;