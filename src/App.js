import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Test from './Test';
import Foot from './Foot';
// import axios from 'axios'

import OperationsService from './api/Api';


function App() {


  const [nationality, setNationality] = useState([])
  const [gender, setGender] = useState([])
  const [age, setAge] = useState([])
  const [input, setInput] = useState();

  // 44444444444444444444444444
  
  
  // const onClick = () => {
  //   const requestOne = axios.get(`https://gender-api.com/get?name=${input}`);
  //   const requestTwo = axios.get(`https://gender-api.com/get?name=${input}`);
  //   const requestThree = axios.get(`https://gender-api.com/get?name=${input}`);  

  //   axios
  //     .all([requestOne, requestTwo, requestThree])
  //     .then(
  //       axios.spread((...responses) => {
  //         const responseOne = setNationality(responses[0]);
  //         const responseTwo = setGender(responses[1]);
  //         const responesThree = setAge(responses[2]); 

  //         // use/access the results
  //         console.log(nationality, responseTwo, responesThree);
  //       })
  //     )
  //     .catch(errors => {
  //       // react on errors.
  //       console.error(errors);
  //     });
  // }

  // 44444444444444444444444444


  const getOperations = () => {
    let operationsService = new OperationsService();

    const datanationality = operationsService.getNationality(input);
    const datagender = operationsService.getGender(input);
    const dataage = operationsService.getAge(input);

    console.log(datanationality)
    console.log(datagender)
    console.log(dataage)

    datanationality.then(res => setNationality(res))
    datagender.then(res => setGender(res))
    dataage.then(res => setAge(res))
  }


  return (
    <div className="App">
      <Header />

      < Test 
      button = {getOperations}
      input = {input}
      setinput = {e => setInput(e.target.value)}
      name = {nationality.name}
      nationality = {nationality.name}
      ages = {nationality.errno}
      gender = {nationality.gender}
      />

      <Foot />
    </div>
  );
}

export default App;
