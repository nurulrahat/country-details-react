
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
//https://restcountries.eu/rest/v2/all

function App() {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
fetch('https://restcountries.eu/rest/v2/all')
.then(resp=>resp.json())
.then(data=>{setCountries(data)
console.log(data);
})
  },[])
 // console.log(countries);
  return (
    
    <div className="App">
      <h1>The country list:</h1>
      
        {
        countries.map(country=>
       <Country country={country} key={country.numericCode}></Country>
          
        )
        }
      
    </div>
  );
}

export default App;
