import './App.css';
import React, { useEffect, useState } from 'react';
import * as CONST from './util/constants';

function App() {

  const [result, setResult] = useState('');
  const [playerChoice, setPlayerChoice] = useState('Waiting...');
  const [com1Choice, setCom1Choice] = useState('Waiting...');
  const [com2Choice, setCom2Choice] = useState('Waiting...');


  const computerArray = ['Rock', 'Paper', 'Scissors']

  const handlePlayerSelect = (selection) => {
      let computerOneChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
      setPlayerChoice(selection);
      setCom1Choice(computerOneChoice);
      setCom2Choice('N.A.')
      
      if(selection===CONST.ROCK && computerOneChoice===CONST.SCISSORS
        || selection===CONST.SCISSORS && computerOneChoice===CONST.PAPER
        || selection===CONST.PAPER && computerOneChoice===CONST.ROCK) {
        setResult('Player Wins')
      }
      else if(computerOneChoice===CONST.ROCK && selection===CONST.SCISSORS
        || computerOneChoice===CONST.SCISSORS && selection===CONST.PAPER
        || computerOneChoice===CONST.PAPER && selection===CONST.ROCK) {
        setResult('Computer 1 Wins')
      }
      else {
        setResult('Draw')
      }
  }

  const handleCompVsComp = () => {
    let computerOneChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    let computerTwoChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
    setPlayerChoice('N.A.');
    setCom1Choice(computerOneChoice);
    setCom2Choice(computerTwoChoice);

    if(computerOneChoice===CONST.ROCK && computerTwoChoice===CONST.SCISSORS
      || computerOneChoice===CONST.SCISSORS && computerTwoChoice===CONST.PAPER
      || computerOneChoice===CONST.PAPER && computerTwoChoice===CONST.ROCK) {
      setResult('Computer 1 Wins')
    }
    else if(computerTwoChoice===CONST.ROCK && computerOneChoice===CONST.SCISSORS
      || computerTwoChoice===CONST.SCISSORS && computerOneChoice===CONST.PAPER
      || computerTwoChoice===CONST.PAPER && computerOneChoice===CONST.ROCK) {
      setResult('Computer 2 Wins')
    }
    else {
      setResult('Both Computers Draw')
    }
  }

  useEffect(() => {
    console.log('result:', result)
  }, [result])

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>
            Rock, Paper, Scissors Game
          </h2>

          <p className='player-text'>Player selection: <i>{playerChoice}</i></p>
          <p className='com1-text'>Computer 1 selection: <i>{com1Choice}</i></p>
          <p className='com2-text'>Computer 2 selection: <i>{com2Choice}</i></p>
          <p><b>Result: {result}</b></p>

          <div className="App-mainframe">
            <p>Player Selection (click here to play): </p>
            <button 
            className="button"
            onClick={() => {
              handlePlayerSelect('Rock')
            }}
            >
              Rock
            </button>
            <button 
            className="button"
            onClick={() => {
              handlePlayerSelect('Paper')
            }}>
              Paper
            </button>
            <button 
            className="button"
            onClick={() => {
              handlePlayerSelect('Scissors')
            }}>
              Scissors
            </button>
          </div>

          <div className="App-mainframe">
            <p>Click here for computer vs computer: </p>
            <button 
            className="button2"
            onClick={() => {
              handleCompVsComp();
            }}>
              Computer vs Computer
            </button>
          </div>
        </header>


      </div>


    </>
  );
}

export default App;
