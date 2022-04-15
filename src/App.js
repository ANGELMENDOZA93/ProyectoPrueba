import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SelectBox from './Components/SelectBox';
import Buscador from './Components/Buscador';
import Countries from './Components/Countries';
//import { render } from '@testing-library/react';



function App (){

  const [countries, setCountries] = useState([]);

  const initialurl = "https://restcountries.com/v3.1/all"

  const fetchCountries = (url) => {  
     fetch(url)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  };

  useEffect(() => {
  fetchCountries(initialurl) 
  }, [])
  

  return (
    <div className="App">
      <Header/>
        <div className='container-80'>
          <div className='search-filters'>
          <Buscador/>
          <SelectBox width={200} />
          </div>
          <div className="container">
            <Countries countries={countries} />
          </div>
        </div>
    </div> 
  );
}


export default App;
