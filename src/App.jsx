import { useState } from 'react';
import './App.css';

function App() {
  const [day, setDay] = useState('');
  const [gender, setGender] = useState('');
  const [akanName, setAkanName] = useState('');

  const getAkanName = (event) => {
    event.preventDefault();
  };

  return <></>;
}

export default App;
