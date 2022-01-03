import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Foot from './Foot';

import OperationsService from './api/Api';


function App() {


  const [nationality, setNationality] = useState([])
  const [gender, setGender] = useState([])
  const [age, setAge] = useState([])
  const [input, setInput] = useState();

  const getOperations = () => {
    const operationsService = new OperationsService();

    const datanationality = operationsService.getNationality(input);
    const datagender = operationsService.getGender(input);
    const dataage = operationsService.getAge(input);

    datanationality.then(res => setNationality(res))
    datagender.then(res => setGender(res))
    dataage.then(res => setAge(res))
  }


  return (
    <div className="App">
      <Header /> {/*Añado Bootstrap al head*/}

      < Search 
        button = {getOperations}
        input = {input}
        setinput = {e => setInput(e.target.value)}
        name = {nationality.name}
        nationality = { nationality.country}
        age = {age.age}
        gender = {gender.gender}
        genderprob = {gender.probability}
      />

      <Foot /> {/*Bootstrap script y firma.*/}
    </div>
  );
}

export default App;
