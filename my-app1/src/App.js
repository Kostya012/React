import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar';
import Paragraf from './Paragraf';
import Input from './Input';
import Greeting from './Greeting';
import AgeDetector from './AgeDetector';
import Counter from './Counter';
import Accordion from './Accordion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar />
        <Paragraf />
        <Input />
        <Greeting name="John" message = "say hello"/>
        <AgeDetector age={17} />
        <AgeDetector age={22} />
        <Accordion expanded={false}>
          <h1>Simple text</h1>
        </Accordion>
        <Counter />
      </header>
    </div>
  );
}

export default App;
