import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from "axios";
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

 function App() {  
  const [frase, setfrase] = useState("")
  const [postado, setpostado] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    console.log(postado);
    if (postado === false) {
      setpostado(true);
    } else {
      axios.post('http://127.0.0.1:5000/my-datas', {
        plusone: 1
      }).then(response => {
        console.log(response.data);
        setData(response.data)
      }).catch(error => {
        console.log(error);
      });
    }
  }, [postado]);
  return (
    <>
      <div>
      </div>
     <button id='btnSaibaMais'>
     <Link to="/">Saiba Mais</Link>
      </button>
    </>
  );
}

export default App;
