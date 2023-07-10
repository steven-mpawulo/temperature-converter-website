
import { useState } from 'react';
import './App.css';

function App() {
  const [degree, setDegree] = useState(0);
  const [temperatureType, setTemperatureType] = useState("Celcius");
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const handleInputChange = (event) => {
    setDegree(event.target.value);
    console.log(event.target.value);
  }

  const handleSelectChange = (event) => {
    setTemperatureType(event.target.value);
    console.log(event.target.value);
  }

  const handleButtonClick = (degree, temperatureType) => {
    if (temperatureType === "Celcius"){
      let result = (degree * 9/5) + 32;
      setConvertedTemperature(`${result} \u00B0 F`);
    } else if(temperatureType === "Fahrenheit") {
      let result = (degree - 32) * (5 / 9);
      console.log(`${degree} to be converted to celcius`);
      setConvertedTemperature(`${result} \u00B0 C`);
    }
    else {
    }
  }
  return (
    <div>
      <header></header>
      <nav></nav>
      <main>
        <div className="container">
          <div className="first-row">
            <form action='post' onSubmit={(event) => {
              event.preventDefault();
              handleButtonClick(degree, temperatureType);
            }}>
              <div className="temperature-number-container">
                <label htmlFor="temperature-number">Degrees</label><br />
                <input type="number" id='temperature-number' name='temperature-number' value={degree} onChange={handleInputChange} />
              </div>

              <div className="temperature-type-container">
                <label htmlFor="temperature-type">Type</label><br />
                <select name="temperature-type" id="temperature-type" onChange={handleSelectChange} value={temperatureType}>
                  <option value="Celcius">Celcius</option>
                  <option value="Fahrenheit">Fahrenheit</option>
                </select>
              </div>
              <div className="convert-button-container">
                <button type='submit' id='convert' className='convert' onClick={() => {
                  handleButtonClick(degree, temperatureType);
                }}>Convert</button>
              </div>
            </form>
          </div>

          <div className="second-row">
            <div className="results-container">
              <p>Results</p>
              <p><strong>{convertedTemperature}</strong></p>
            </div>
          </div>

        </div>

      </main>
      <footer></footer>
    </div>
  );
}

export default App;
