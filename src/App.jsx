import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Display from './components/Display';
import Controls from './components/Controls';

function App() {
  const [celsius, setCelsius] = useState(20);
  const [fahrenheit, setfahrenheit] = useState((celsius*1.8+32));
  const [unit, setUnit] = useState('C');

  function handleTempChange(amount, unit) {
    if (unit === 'C') {
      setCelsius(celsius+amount);
      setfahrenheit((celsius*1.8+32));
    }
    else {
      setfahrenheit(fahrenheit+amount);
      setCelsius((fahrenheit-32)/1.8);
    }
  }

  function handleUnitToggle() {
    setUnit( prevUnit => (prevUnit === 'C')? 'F' : 'C');
  }

  const displayTemp = (unit === 'C') ? celsius.toFixed(3) : fahrenheit.toFixed(2);

  return (
		<div className='thermostat-container'>
      <Header 
        className="thermostat-header"  
        innerText='Thermostat'>
      </Header>
			<Display 
				temperature={displayTemp} 
				unit={unit}>
			</Display>
			<br></br>
			<Controls 
				onTempChange={handleTempChange}
				onUnitChange={handleUnitToggle}
				unit={unit}>
			</Controls>
		</div>
  )
}

export default App