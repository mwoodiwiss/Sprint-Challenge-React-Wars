import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsDiv from './components/CardsDiv';
import './App.css';
import './App.scss';

const App = () => {
  const [dataArray, setDataArray] = useState([{}])

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
      setDataArray(response.data.results)})
      .catch(err => console.log(err))
  }, []) 
 
  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>      
      <CardsDiv data={dataArray} />    
    </div>
  );
}

export default App;
