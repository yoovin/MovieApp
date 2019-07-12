import React from 'react';
import './App.css';
import Movie from './Movie'

const ani = [
  "카구야 님은 고백받고 싶어",
  "5등분의 신부",
  "사신 도련님과 검은 메이드",
  "바보와 시험과 소환수"
]

function App() {
  return (
    <div className="App">
     <Movie title={ani[0]}/>
     <Movie title={ani[1]}/>
     <Movie title={ani[2]}/>
     <Movie title={ani[3]}/>
    </div>
  );
}

export default App;
