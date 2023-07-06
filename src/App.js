
import './App.css';

function App() {
  return (
    <div>
      <header></header>
      <nav></nav>
      <main>
        <div className="container">
          <div className="first-row">
          <form action="post">
          <div className="temperature-number-container">
          <label htmlFor="temperature-number">Degrees</label><br />
                <input type="number" id='temperature-number' name='temperature-number' />
          </div>

          <div className="temperature-type-container">
          <label htmlFor="temperature-type">Type</label><br />
                <select name="temperature-type" id="temperature-type">
                  <option value="Celcius">Celcius</option>
                  <option value="Fahrenheit">Fahrenheit</option>
                </select>
          </div>
            <div className="convert-button-container">
            <button type='submit' id='convert' className='convert'>Convert</button>
            </div>
            </form>
          </div>

          <div className="second-row">
          <div className="results-container">
              <p>Results</p>
              <p><strong>Answer</strong></p>
            </div>
          </div>
      
        </div>
            
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
